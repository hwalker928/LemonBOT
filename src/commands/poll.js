const { MessageEmbed } = require('discord.js')

module.exports = {
    meta: {
        help: "Create a poll",
        level: Infinity,
        doNotDocument: true
    },
    exec: async (msg, suffix) => {
        const embed = new MessageEmbed()
            .setTitle('A new poll has been started :tada:')
            .setDescription(`:one: ${suffix.replace(new RegExp(/(")([^"]+)(")( )(")([^"]+)(")/gm), '$2')}
            :two: ${suffix.replace(new RegExp(/(")([^"]+)(")( )(")([^"]+)(")/gm), '$6')}`)
            .setFooter(`Lemon Studios • Poll created by ${msg.author.username}`)
            .setColor(0xFBF514)
        const mmsg = await msg.channel.send(embed)
        mmsg.react('1️⃣')
            .then(() => mmsg.react('2️⃣'))
    }
}