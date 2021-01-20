module.exports = {
    meta: {
        help: "Shows the source code of the bot",
        aliases: ["os", "code", "github"], //dont work currently
        level: 0,
    },
    exec: (msg, suffix) => {
        const embed = msg.channel.createEmbed()
            .title('My Source Code')
            .thumbnail("Https://github.com/hwalker928")
            .description("[My Source Code](https://github.com/hwalker928/lemonBOT), written in NodeJS")
            .fields(
                { name: "Contributors", value: "[Jpuf0](https://github.com/Jpuf0)"}
            )
            .footer(`Lemon Studios • Requested by ${msg.author.username}`)
            .color(0xFBF514)
            .send()
    }
}