'use strict'

const { default: axios } = require('axios');
const { Message } = require('../models/index')
const senderMsg = require('../services/hookbinSender')

class sendMessageTask {

    getDueReminder() {
        return Message.findAll({ where : {
            scheduledAt : {
                [Op.lte]: Date()
            }
        }})
    }

    run() {
        //get all messages scheduled current or past
        this.getDueReminder().then(msgs => {
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

            //wait until all sendPromises complete
            Promise.all(sendPromises).then(()=>{
                //remove reminder msg that is successfully sent
                Message.destroy({where : {id : sentMsgIds }});
            })
        })
    }

}

module.exports = new sendMessageTask()