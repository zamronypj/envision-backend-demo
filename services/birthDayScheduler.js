'use strict'

const moment = require('moment')

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

        let bday = moment.tz(birthday, timezone)
        //replace time to 09:00AM
        bday.set({ h: 9, m:0 });
        return bday;
    }
}

module.exports = scheduler;