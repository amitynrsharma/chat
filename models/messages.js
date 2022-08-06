const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('messages', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        room: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        sender_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        receiver_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        message: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        // hobby: {
        //     type: DataTypes.STRING(50),
        //     allowNull: false
        // },
        // gender: {
        //     type: DataTypes.STRING(50),
        //     allowNull: false
        // },
        // country: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        // image: {
        //     type: DataTypes.STRING(500),
        //     allowNull: false
        // }
    }, {
        sequelize,
        tableName: 'messages',
        timestamps: false,
        indexes: [{
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
                { name: "id" },
            ]
        }, ]
    });
};