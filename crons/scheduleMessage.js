'use strict'

const { User, Message } = require('../models/index')

class scheduleMessageTask {

    getUserWithUpcomingBirthday() {
        return User.findAll({ where : {
            mdob : {
                [Op.lte]: Date()
            }
        }})
    }

    run() {
        //get all users with upcoming birthday
        this.getUserWithUpcomingBirthday().then(msgs => {
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

module.exports = new scheduleMessageTask()