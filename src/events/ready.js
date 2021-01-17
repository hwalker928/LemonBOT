module.exports = async function () {
  global.logger.log(`Fully Ready, Serving ${global.bot.guilds.cache.size} guild(s).`)
  if (!global.bot.user.bot) global.logger.warn("You're not using a bot account, this is unsupported and could cause problems.")
  if (global.bot.guilds.cache.size === 0) {
    global.logger.log('Detected a fresh bot account')
    global.logger.log('Please open the following link in your browser to invite the bot to your server:')
    global.logger.log(`https://discordapp.com/oauth2/authorize?&client_id=${global.bot.user.id}&scope=bot`)
  }
}
