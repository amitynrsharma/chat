const userController = require('../controller/userController');
const db = require('../models');
const Users = db.users;

module.exports = (app, io) => {
    app.route('/').get(userController.login);
    app.route('/login').post(userController.checkCredentials);
    app.route('/chat').post(userController.getUserChat);




    io.on('connect', (socket) => {
        socket.on('joined-user', async(data) => {
            var studentObj = {
                is_online: 1,
                last_online: null
            }
            await Users.update(studentObj, {
                returning: true,
                where: { id: data.userId },
            });
        });


        socket.on('disconnecting', async(req, res) => {
            var studentObj = {
                is_online: 0,
                last_online: new Date()
            } 
            await Users.update(studentObj, {
                returning: true,
                where: { id: socket.request.session.userData.id },
            });
        })
    });
}