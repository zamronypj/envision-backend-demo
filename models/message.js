'use strict'

//const db = require('../../core/db')
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {

    class Message extends Model {
        associate(models) {
            Message.belongsTo(models.User);
        }
    }

    Message.init({
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        message : {
            type : DataTypes.STRING,
            allowNull : false
        },
        scheduledAt : {
            type : DataTypes.DATE,
            allowNull : false
        },
        userId : {
            type : DataTypes.INTEGER,
            allowNull : false,
            references: { model: 'Users', key: 'id' },
            onDelete : 'CASCADE',
            onUpdate : 'CASCADE'
        },
    }, {
        sequelize,
        modelName : 'Message'
    })

    return Message;
}

