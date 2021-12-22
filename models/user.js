'use strict'

//const db = require('../../core/db')
const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {

    class User extends Model {}

    User.init({
        id : {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },

        firstName : {
            type : DataTypes.STRING,
            allowNull : false
        },
        lastName : {
            type : DataTypes.STRING,
            allowNull : false
        },
        birthDay : {
            type : DataTypes.DATEONLY,
            allowNull : false
        },
        location : {
            type : DataTypes.STRING,
            allowNull : false
        },

    }, {
        sequelize,
        modelName : 'User'
    });

    return User
};