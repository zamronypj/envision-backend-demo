'use strict'

const moment = require('moment');
const { User, Message } = require('../models/index')
const birthdayScheduler = require('../services/birthDayScheduler')

class scheduleBirthdayMessageTask {

    getUserWithUpcomingBirthday() {
        return User.findAll({ where : {
            mdob : moment().add(1, 'days').format('MM-DD')
        }})
    }

    run() {
        //need to store reference to current class instance as
        //closure will be called inside cron closure
        const self = this;
        return () => {
            //get all users with upcoming birthday
            self.getUserWithUpcomingBirthday().then(users => {
                users.forEach(async (usr) => {
                    const msg = await Message.findOne({where: {userId : usr.id}});
                    if (!msg) {
                        Message.create({
                            message : "Hey " + usr.fullName + " it's your birthday",
                            scheduledAt : birthdayScheduler.getScheduledAt(usr.birthDay, usr.location.timezone),
                            userId : usr.id
                        })
                    }
                });
            }).catch(err => {
                console.log(err.message)
            })
        }

    }

}

module.exports = new scheduleBirthdayMessageTask()