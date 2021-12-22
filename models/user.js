'use strict'

const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {

    class User extends Model {
        static associate(db) {
            User.hasMany(db.Message);
            User.belongsTo(db.Location, { foreignKey : 'location'});
        }
    }

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
        fullName : {
            type: DataTypes.VIRTUAL,
            get() {
                return this.getDataValue('firstName') + ' ' +
                    this.getDataValue('lastName');
            },
            set(value) {
                throw new Error('Do not try to set the `fullName` value!');
            }
        },

        //month-day birthday
        mdob : {
            type : DataTypes.STRING,
            allowNull : false
        },


    }, {
        sequelize,
        modelName : 'User'
    });

    return User
};