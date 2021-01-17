const { MessageEmbed } = require('discord.js')

module.exports = {
    meta: {
        help: "edits an embed",
        level: Infinity,
        doNotDocument: true
    },
    exec: (msg, suffix) => {
        const messageID = /(\d{18})/gm.exec(suffix)[0]
        const embed = new MessageEmbed()
            .setTitle(suffix.replace(new RegExp(/(\d{18} )(")([^"]+)(")( )(")([^"]+)(")/gm), `$3`))
            .setDescription(suffix.replace(new RegExp(/(\d{18} )(")([^"]+)(")( )(")([^"]+)(")/gm), `$7`))
            .setFooter(`Lemon Studios • Posted by ${msg.author.username}`)
            .setColor(0xFBF514)
        msg.channel.messages.fetch(messageID).then(message => message.edit(embed))
    }
}