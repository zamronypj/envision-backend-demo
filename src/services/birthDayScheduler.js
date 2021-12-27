'use strict'

const moment = require('moment-timezone')

/**
 * class which generated schedule time for sending message in local time of user.
 */
const scheduler = {
    /**
     * get schaduled bithday at user local timezone
     * @param {date} birthday
     * @param {string} timezone
     */
    getScheduledAt(birthday, timezone) {
        let curDate = moment()
        let bday = moment.tz(birthday, timezone)
        //we always get upcoming birthday later than current date
        //so month (jan=0) < currdate month(dec=11)  meaning new year
        const scheduledYear = bday.month() < curDate.month() ? curDate.year()+1 : curDate.year();
        //replace time to 09:00AM
        bday.year(scheduledYear).hour(9).minute(0);
        return bday;
    }
}

module.exports = scheduler;