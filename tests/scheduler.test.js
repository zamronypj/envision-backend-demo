const chai = require('chai');
const {expect} = chai;
const chaiDateTime = require('chai-datetime');
const scheduler = require('../src/services/birthDayScheduler');
const moment = require('moment-timezone')

chai.use(chaiDateTime)
moment.tz('UTC')

describe('Birthday scheduler', ()=>{
    it('tests that scheduled date is correct', async () => {
        const scheduledAt = scheduler.getScheduledAt('1977-12-30', 'Asia/Jayapura')
        const year = new Date().getFullYear();
        //jan=0..dec=11
        const refDate = new Date(Date.UTC(year, 11, 30, 0, 0, 0))
        expect(scheduledAt.toDate()).to.equalTime(refDate)
    })

    it('tests that scheduled date next year is correct', async () => {
        const scheduledAt = scheduler.getScheduledAt('1977-01-01', 'Asia/Jayapura')
        const year = new Date().getFullYear();
        //jan=0..dec=11
        const refDate = new Date(Date.UTC(year+1, 0, 1, 0, 0, 0))
        expect(scheduledAt.toDate()).to.equalTime(refDate)
    })
});