const { MessageEmbed } = require('discord.js')

module.exports = {
  meta: {
    help: 'Shows the source code of the bot',
    aliases: ['os', 'code', 'github'], // dont work currently
    level: 1
  },
  exec: (msg, suffix) => {
    const embed = new MessageEmbed()
      .setTitle('My Source Code')
      .setThumbnail('Https://github.com/hwalker928')
      .setDescription('[My Source Code](https://github.com/hwalker928/lemonBOT), written in python')
      .addFields(
        { name: 'Contributors', value: '[Jpuf0](https://github.com/Jpuf0)' }
      )
      .setFooter(`Lemon Studios • Requested by ${msg.author.username}`)
      .setColor(0xFBF514)
    msg.channel.send(embed)
  }
}
