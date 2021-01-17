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
    // eslint-disable-next-line prefer-regex-literals
    const review = suffix.replace(new RegExp(/(<@!\d{18}> )(10\/10|[1-9]\/10)/gm), '')
    // eslint-disable-next-line prefer-regex-literals
    const rating = new RegExp(/(<@!\d{18}> )(10\/10|[1-9]\/10)/gm).exec(suffix)[2]
    const customer = `<@${msg.author.id}>`
    const time = moment().format('l')

    if (rating == null) {
      msg.reply(global.i18n.raw('REVIEW_ERROR'))
      return
    }
    const embed = new MessageEmbed()
      .setColor(0xFBF514)
      .addFields(
        { name: 'Review', value: review, inline: false },
        { name: 'Freelancer', value: freelancer, inline: false },
        { name: 'Customer', value: customer, inline: false },
        { name: 'Rating', value: rating, inline: false }
      )
      .setFooter(time)
      // eslint-disable-next-line no-undef
    bot.channels.cache.get('775659716142694430').send(embed)
  }
}
