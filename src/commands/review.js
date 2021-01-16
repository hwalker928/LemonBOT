const { MessageEmbed } = require('discord.js')
const moment = require('moment')
moment.locale('en-gb')
module.exports = {
    meta: {
        help: 'Leaves a review for your freelancer',
        usage: '<freelancer> <rating> <review>',
        module: 'reviews',
        level: 1
    },
    exec: (msg, suffix) => {
        const freelancer = suffix.substr(0, 22)
        const review = suffix.replace( new RegExp(/(<@!\d{18}> )(10\/10|[1-9]\/10)/gm), "")
        const rating = new RegExp(/(<@!\d{18}> )(10\/10|[1-9]\/10)/gm).exec(suffix)[2]
        const customer = `<@${msg.author.id}>`
        const time = moment().format('l')

        if (rating == null) {
            msg.reply(global.i18n.raw("REVIEW_ERROR"))
            return;
        }
        const embed = new MessageEmbed()
            .setColor(0xFBF514)
            .addFields(
                { name: "Review", value: review, inline: false},
                { name: "Freelancer", value: freelancer, inline: false},
                { name: "Customer", value: customer, inline: false},
                { name: "Rating", value: rating, inline: false}
            )
            .setFooter(time)
        bot.channels.cache.get('800118820525441074').send(embed)
    }
}