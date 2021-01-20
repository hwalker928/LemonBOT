const chalk = require('chalk')
const log = console.log
const inspect = require('util').inspect

module.exports = {
  debug: (msg, data) => {
    if (process.env.NODE_ENV === 'debug') log(chalk`{bold.green DEBUG}: ${msg}`)
  },
  log: (msg) => {
    log(chalk`{bold.blue INFO}: ${msg}`)
  },
  error: (e, exit = false) => {
    if (!(e instanceof Error)) {
      exit ? log(chalk`{bold.green.bgRed FATAL}: ${e}`) : log(chalk`{bold.red ERROR}: ${e}`)
      if (exit) process.exit(1)
    } else {
      exit ? log(chalk`{bold.black.bgRed FATAL}: ${e.stack ? e.stack : e.message}`) : log(chalk`{bold.red ERROR}: ${e.stack ? e.stack : e.message}`)
      if (exit) process.exit(1)
    }
  },
  warn: (msg) => {
    log(chalk`{bold.yellow WARN}: ${msg}`)
  },
  trace: (msg) => {
    if (process.env.NODE_ENV === 'debug') log(chalk`{bold.cyan TRACE}: ${inspect(msg)}`)
  },
  command: (opts) => {
    if (process.env.SUPRESS_COMMANDLOG) return
    log(chalk`{bold.magenta CMD}: ${opts.cmd} by ${opts.m.author.username} in ${opts.m.channel.guild ? opts.m.channel.guild.name : 'DM'}`)
  }
}

function transform (guild) {
  if (!guild) return
  const proxy = guild
  proxy.joinedAt = new Date(guild.joinedAt).toISOString()
  proxy.createdAt = new Date(guild.createdAt).toISOString()
  proxy.emojis = undefined
  return proxy
}
