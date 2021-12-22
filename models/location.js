'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {

    class Location extends Model {
        static associate(db) {
            Location.hasMany(db.User, { foreignKey : 'location'});
        }

    }

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
