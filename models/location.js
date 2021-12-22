'use strict'

//const db = require('../../core/db')
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {

    class Location extends Model {}

    Location.init({
        name : {
            type : DataTypes.STRING,
            primaryKey : true,
            allowNull : false
        },
        timezone : {
            type : DataTypes.STRING,
            allowNull : false
        },
    }, {
        sequelize,
        modelName : 'Location'
    })

    return Location;
}
