'use strict'

const { Location } = require('../models/index')

const LocationController = {
    listLocation : (req, res) => {
        //TODO: improve with indices and avoid query all records
        Location.findAll().then(loc => {
            res.json({
                status : 'ok',
                message : 'Location read ok',
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

    getLocation : (req, res) => {
        Location.findOne({ where : { name : req.params.name }}).then(loc => {
            res.json({
                status : 'ok',
                message : 'Location read ok',
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

    createLocation : (req, res) => {
        Location.create({
            name : req.body.name,
            timezone : req.body.timezone
        }).then(loc => {
            res.json({
                status : 'ok',
                message : 'Location created',
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

    deleteLocation : (req, res) => {
        Location.destroy({where : {name : req.params.name}}).then(affectedRow => {
            if (affectedRow) {
                return {
                    status : 'ok',
                    message : 'Location deleted',
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

    updateLocation : (req, res) => {
        Location.update({
            name : req.body.name,
            timezone : req.body.timezone
        }, { where : { name : req.params.name }}).then(loc => {
            res.json({
                status : 'ok',
                message : 'Location updated',
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

module.exports = LocationController;