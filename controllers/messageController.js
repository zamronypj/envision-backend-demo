'use strict'

const { Message } = require('../models/index')

const MessageController = {
    listMessage : (req, res) => {
        //TODO: improve with indices and avoid query all records
        Message.findAll().then(loc => {
            res.json({
                status : 'ok',
                message : 'Message read ok',
                data : loc
            })
        }).catch(err => {
            res.json({
                status : 'err',
                message : err.message,
                data : null
            })
        })
    },

    getMessage : (req, res) => {
        Message.findOne({ where : { id : req.params.id }}).then(loc => {
            res.json({
                status : 'ok',
                message : 'Message read ok',
                data : loc
            })
        }).catch(err => {
            res.json({
                status : 'err',
                message : err.message,
                data : null
            })
        })
    },

    createMessage : function (req, res) {
        Message.create({
            message : req.body.message,
            scheduledAt : req.body.scheduledAt,
            userId : req.body.userId,
        }).then(loc => {
            res.json({
                status : 'ok',
                message : 'Message created',
                data : loc
            })
        }).catch(err => {
            res.json({
                status : 'err',
                message : err.message,
                data : null
            })
        })
    },

    deleteMessage : function (req, res) {
        Message.destroy({where : {id : req.params.id}}).then(affectedRow => {
            if (affectedRow) {
                return {
                    status : 'ok',
                    message : 'Message deleted',
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

    updateMessage : function (req, res) {
        Message.update({
            message : req.body.message,
            scheduledAt : req.body.scheduledAt,
            userId : req.body.userId,
        }, { where : { id : req.params.id }}).then(loc => {
            res.json({
                status : 'ok',
                message : 'Message updated',
                data : loc
            })
        }).catch(err => {
            res.json({
                status : 'err',
                message : err.message,
                data : null
            })
        })
    },

}

module.exports = MessageController;