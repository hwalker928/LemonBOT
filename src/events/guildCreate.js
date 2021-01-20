const flags = require('../features/flags')

module.exports = async function (ctx) {
  if(await flags.has('GuildBlacklisted', ctx[0])) {
    global.logger.debug('Detected blacklisted guild, leaving...')
    return ctx[0].leave()
  }
}