'use strict'

const cron = require('node-cron')
const sendMessageTask = require('./crons/sendMessage')
const scheduleMessageTask = require('./crons/scheduleMessage')

//run task every hour to make sure we can deliver message at 9am of
//user local timezone
cron.schedule('0 * * * *', sendMessageTask.run)

//run task every day to make sure we can deliver message at 9am of
//user local timezone
cron.schedule('0 0 * * *', scheduleMessageTask.run)