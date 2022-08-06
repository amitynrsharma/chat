const sequelize = require('sequelize');
const op = sequelize.Op;
var multer = require('multer');
const db = require("../models/index");
const bcrypt = require('bcrypt');
const User = db.users;
const Message = db.messages;
const helpers = require("../helpers/common");
const users = require('../models/users');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

module.exports = {
    login: async(req, res) => {
        res.render('login');
    },


    getUserChat: async(req, res) => {
        try {
            User.findOne({ where: { id: req.body.id } }).then(rows => {
                var timeAgo = helpers.timeAgo(rows.last_online);
                rows.time_ago = timeAgo;
                res.render('chat', { user: rows,timeAgo:req.body.timeAgo });
            })
        } catch (err) {
            console.log(err);
        }
    },

    checkCredentials: async(req, res) => {
        try {
            let getUserByEmail = await User.findOne({
                where: { email: req.body.email },
            });
            if (getUserByEmail != null) {
                bcrypt.compare(req.body.password, getUserByEmail.password, function(err, result) {
                    if (result) {
                        var sess = req.session;
                        sess.userData = getUserByEmail;
                        User.findAll({
                            where: {
                                id: {
                                    [op.ne]: getUserByEmail.id
                                }
                            }
                        }).then(rows => {
                            try {
                                var newArr = [];
                                rows.forEach((element, index) => {
                                    newArr[index] = element;
                                    if (element.last_online != null) {
                                        newArr[index].timeAgo = helpers.timeAgo(element.last_online);
                                    }
                                });
                                res.render('index', { users: newArr, user_id: sess.userData.id, userName: req.session.userData.name })
                            } catch (err) {
                                console.log(err);
                            }
                        })
                    }
                });

            }
        } catch (err) {
            console.log(err);
        }
    },
}