'use strict'

const { Message } = require('../models/index')
const senderMsg = require('../services/hookbinSender')
const moment = require('moment')
const { Op } = require("sequelize")

class sendMessageTask {

    getDueReminder() {
        return Message.findAll({ where : {
            scheduledAt : {
                [Op.lte]: moment().toDate()
            }
        }})
    }

    run() {
        //need to store reference to current class instance as
        //closure will be called inside cron closure
        const self = this;
        return () => {
            //get all messages scheduled current or past
            self.getDueReminder().then(msgs => {
                msgs.forEach(msg => {
                    senderMsg.send(msg).then(() => {
                        //remove message when successfuly sent
                        Message.destroy({where : {id : msg.id }})
                    });
                });
            })
        }
    }

}

module.exports = new sendMessageTask()