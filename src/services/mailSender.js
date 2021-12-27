'use strict'

const nodemailer = require('nodemailer');
const appCfg = require('../config/appconfig')

const {smtp, sender} = appCfg.thirdParty.mailer;

const transporter = nodemailer.createTransport(smtp);

/**
 * Class responsible to send message by email.
 */
class MailSender {

    constructor(senderOpts){
        this.senderOpts = senderOpts;
    }

    /**
     * send message to external service
     * @param {Message} msg
     */
    send(msg) {
        const mailOptions = {
            from : this.senderOpts.from,
            to : msg.user.email,
            subject : 'Happy birthday',
            text : msg.message
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
}

module.exports = new MailSender(sender)