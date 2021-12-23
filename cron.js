'use strict'

const cron = require('node-cron')
const sendMessageTask = require('./crons/sendMessage')
const scheduleBirthdayMessageTask = require('./crons/scheduleBirthdayMessage')

//run task every hour to make sure we can deliver message at 9am of
//user local timezone
cron.schedule('* * * * *', sendMessageTask.run())

//run task every day to collect upcoming birthdays
cron.schedule('* * * * *', scheduleBirthdayMessageTask.run())
