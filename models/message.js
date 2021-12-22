'use strict'

//const db = require('../../core/db')
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {

    class Message extends Model {}

    Message.init({
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        timezone : {
            type : DataTypes.STRING,
            allowNull : false
        },
    }, {
        sequelize,
        modelName : 'Message'
    })

    return Message;
}

