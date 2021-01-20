module.exports = {
    meta: {
        help: "edits an embed",
        level: Infinity,
        doNotDocument: true
    },
    exec: (msg, suffix) => {
        const messageID = /(\d{18})/gm.exec(suffix)[0]
        const embed = msg.channel.createEmbed()
            .title(suffix.replace(new RegExp(/(\d{18} )(")([^"]+)(")( )(")([^"]+)(")/gm), `$3`))
            .description(suffix.replace(new RegExp(/(\d{18} )(")([^"]+)(")( )(")([^"]+)(")/gm), `$7`))
            .footer(`Lemon Studios • Posted by ${msg.author.username}`, null)
            .color(0xFBF514)
            .sendable
        bot.getMessage(msg.channel.id, messageID)
            .then(message => message.edit({ embed: embed }))
    }
}