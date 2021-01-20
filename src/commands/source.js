module.exports = {
    meta: {
        help: "Shows the source code of the bot",
        aliases: ["os", "code", "github"], //dont work currently
        level: 0,
    },
    exec: async (msg, suffix) => {
        const embed = msg.channel.createEmbed()
            .title('LemonBOT Code')
            .thumbnail("https://avatars1.githubusercontent.com/u/63236817")
            .description("[My Code](https://github.com/hwalker928/lemonBOT), written in NodeJS")
            .field("Contributors", "[Jpuf0](https://github.com/Jpuf0)")
            .footer(`Lemon Studios • Requested by ${msg.author.username}`)
            .color(0xFBF514)
            .send()
    }
}
