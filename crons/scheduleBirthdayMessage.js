'use strict'

const moment = require('moment');
const { User, Message } = require('../models/index')
const birthdayScheduler = require('../services/birthDayScheduler')

class scheduleMessageTask {

    getUserWithUpcomingBirthday() {
        return User.findAll({ where : {
            mdob : moment().add(1, 'days').format('MM-DD')
        }})
    }

    run() {
        //get all users with upcoming birthday
        this.getUserWithUpcomingBirthday().then(users => {
            users.forEach(usr => {
                Message.create({
                    message : "Hey " + usr.fullName + " it's your birthday",
                    scheduledAt : birthdayScheduler.getScheduledAt(usr.birthDay, usr.location.timezone),
                    userId : usr.id
                })
            });

        })
    }

}

module.exports = new scheduleMessageTask()