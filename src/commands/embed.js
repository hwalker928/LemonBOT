const { MessageEmbed } = require('discord.js')

module.exports = {
  meta: {
    help: 'Create an embed',
    level: Infinity,
    doNotDocument: true
  },
  exec: (msg, suffix) => {
    const embed = new MessageEmbed()
      .setTitle(suffix.replace(new RegExp(/(")([^"]+)(")( )(")([^"]+)(")/gm), '$2'))
      .setDescription(suffix.replace(new RegExp(/(")([^"]+)(")( )(")([^"]+)(")/gm), '$6'))
      .setFooter(`Lemon Studios • Posted by ${msg.author.username}`)
      .setColor(0xFBF514)
    msg.channel.send(embed)
  }
}
