require('dotenv').config()

global.logger = require('./src/internals/logger')

global.i18n = require('./src/internals/i18n')

require('./src/internals/env_check')

global.logger.log('Beginning startup...')

require('eris-embed-builder')

const Eris = require('eris')

const Events = require('./src/internals/directory-loader')('./src/events')

require('./src/internals/k8s-autoscale').then(x => {
    global.logger.log(`Scaling known. Total: ${x.total}, Mine: ${x.mine}`)
    const bot = new Eris(process.env.BOT_TOKEN, {
        restMode: true,
        maxShards: x.total,
        firstShardID: x.mine,
        lastShardID: x.mine
    })

    global.bot = bot

    bot._ogEmit = bot.emit

    bot.on('rawWS', () => {})

    bot.emit = function emit () {
        this._anyListeners.forEach(listener => listener.apply(this, [arguments]))
        return this._ogEmit.apply(this, arguments)
    }

    bot.onAny = function onAny (func) {
        if (!this._anyListeners) this._anyListeners = []
        this._anyListeners.push(func)
    }

    bot.on('debug', global.logger.debug)

    bot.on('error', (e) => {
        if(!(e instanceof Error)) global.logger.error(e.error)
        else global.logger.error(e)
    })

    bot.onAny((ctx) => {
        if (Events[ctx[0]]) {
            Events[ctx[0]](Array.from(ctx).slice(1))
        }
    })

    bot.connect()
})

process.on('warn', global.logger.warn)

process.on('unhandledRejection', (err) => {
    global.logger.error(err)
})
