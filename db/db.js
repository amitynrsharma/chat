// const sequelize = require('sequelize');
const Sequelize = require('sequelize');
const config=require('../config/config.json').test;
const models = require('../models');

// console.log(config);

const db = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    pool: config.pool
});

db.sync();
db.models;

module.exports=db;