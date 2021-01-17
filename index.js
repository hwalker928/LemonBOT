require('dotenv').config()

global.logger = require('./src/internals/logger')

global.i18n = require('./src/internals/i18n')

global.logger.log('Beginning startup...')

const { Client } = require('discord.js')

const bot = new Client()
bot.login(process.env.BOT_TOKEN)

global.bot = bot

bot.on('ready', () => {
    require('./src/events/ready')()
    global.logger.log(`Logged in as ${bot.user.username}`)
})

bot.on('message', (msg) => {
    require('./src/events/messageCreate')(msg)
})