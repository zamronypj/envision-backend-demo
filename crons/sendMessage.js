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
                let sentMsgIds = [];
                let sendPromises = []
                msgs.forEach(msg => {
                    sendPromises.push(
                        senderMsg.send(msg).then(() => {
                            //collect all sent msg id
                            sentMsgIds.push(msg.id);
                        })
                    );
                });

                if (sendPromises.length) {
                    //wait until all sendPromises complete
                    Promise.all(sendPromises).then(()=>{
                        //remove reminder msg that is successfully sent
                        Message.destroy({where : {id : sentMsgIds }});
                    })
                }
            })
        }
    }

}

module.exports = new sendMessageTask()