'use strict'

const { User } = require('../models/index')

const UserController = {
    listUser : (req, res) => {
        //TODO: improve with indices and avoid query all records
        User.findAll().then(usr => {
            res.json({
                status : 'ok',
                message : 'User read ok',
                data : usr
            })
        })
    },

    getUser : (req, res) => {
        User.findOne({ where : { id : req.params.id }}).then(usr => {
            res.json({
                status : 'ok',
                message : 'User read ok',
                data : usr
            })
        })
    },

    createUser : function (req, res) {
        User.create({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            birthDay : req.body.birthDay,
            location : req.body.location
        }).then(usr => {
            res.json({
                status : 'ok',
                message : 'User created',
                data : usr
            })
        })
    },

    deleteUser : function (req, res) {
        User.destroy({ where : { id : req.params.id }}).then(affectedRow => {
            if (affectedRow) {
                return {
                    status : 'ok',
                    message : 'User deleted',
                    data : null
                }
            }

            return {
                status : 'err_delete',
                message : 'Delete failed',
                data : null
            }

        }).then(resp => {
            res.json(resp)

        })
    },

    updateUser : function (req, res) {
        User.update({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            birthDay : req.body.birthDay,
            location : req.body.location
        }, { where : { id : req.params.id }}).then(usr => {
            res.json({
                status : 'ok',
                message : 'User updated',
                data : usr
            })
        })
    },

}

module.exports = UserController;