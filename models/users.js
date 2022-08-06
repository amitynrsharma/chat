const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('users', {
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
        name: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        email: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        is_online: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        last_online: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        password: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        hobby: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        country: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            field: 'updated_at'
        },
    }, {
        sequelize,
        tableName: 'users',
        timestamps: true,
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