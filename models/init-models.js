var DataTypes = require("sequelize").DataTypes;
var _users = require("./users");
var _messages=require("./messages");

function initModels(sequelize) {
  var users = _users(sequelize, DataTypes);
  var mesages = _messages(sequelize, DataTypes);


  return {
    users, 
    mesages
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
