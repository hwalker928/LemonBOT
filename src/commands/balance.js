// eslint-disable-next-line no-unused-vars
const { MessageEmbed } = require('discord.js')

module.exports = {
  meta: {
    help: 'See your lemon count.',
    aliases: ['lemons', 'bal', 'money', 'bank'], // dont work currently
    level: 1
  },
  exec: (msg, suffix) => {
    msg.channel.send(':lemon: Coming Soon:tm:')
  }
}
