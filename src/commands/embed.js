module.exports = {
    meta: {
        help: "Create an embed",
        level: Infinity,
        doNotDocument: true
    },
    exec: (msg, suffix) => {
        msg.channel.createEmbed()
            .title(suffix.replace(new RegExp(/(")([^"]+)(")( )(")([^"]+)(")/gm), `$2`))
            .description(suffix.replace(new RegExp(/(")([^"]+)(")( )(")([^"]+)(")/gm), `$6`))
            .footer(`Lemon Studios • Posted by ${msg.author.username}`, null)
            .color(0xFBF514)
            .send()
    }
}