'use strict'

const axios = require('axios')
const appCfg = require('../config/appconfig')

class HookbinSender {

    constructor(url){
        this.apiUrl = url;
    }

    /**
     * send message to external service
     * @param {Message} msg
     */
    send(msg) {
        const data = JSON.stringify({
            message: msg.message
        })

        return axios.post(this.apiUrl, data)
    }
}

module.exports = new HookbinSender(appCfg.thirdParty.hookbin.url)