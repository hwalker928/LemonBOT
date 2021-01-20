module.exports = {
    meta: {
        help: "Create a poll",
        level: Infinity,
        doNotDocument: true
    },
    exec: async (msg, suffix) => {
        const embed = msg.channel.createEmbed()
            .title('A new poll has been started :tada:')
            .description(`:one: ${suffix.replace(new RegExp(/(")([^"]+)(")( )(")([^"]+)(")/gm), '$2')}
            :two: ${suffix.replace(new RegExp(/(")([^"]+)(")( )(")([^"]+)(")/gm), '$6')}`)
            .footer(`Lemon Studios • Poll created by ${msg.author.username}`)
            .color(0xFBF514)
            .sendable
        /*eslint-disable*/
        const _msg = await msg.channel.createMessage({ embed: embed})
        bot.getMessage(msg.channel.id, _msg.id)
            .then(() => _msg.addReaction('1️⃣'))
            .then(() => _msg.addReaction('2️⃣'))
        /*eslint-enable*/
    }
}