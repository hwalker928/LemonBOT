const moment = require('moment')
moment.locale('en-gb')

const calculateStars = (noStars) => {
    let starCount = parseInt(noStars)
    switch (starCount){
        case 0:
            return ("")
        case 1:
            return ("⭐")
        case 2:
            return ("⭐⭐")
        case 3:
            return ("⭐⭐⭐")
        case 4:
            return ("⭐⭐⭐⭐")
        case 5:
            return ("⭐⭐⭐⭐⭐")
        default:
            return;
    }
}

module.exports = {
    meta: {
        help: 'Leaves a review for your freelancer',
        usage: '<freelancer> <rating> <review>',
        module: 'reviews',
        level: 0
    },
    exec: (msg, suffix) => {
        if(suffix === ""){
            msg.channel.createMessage("You need to actually write the review!")
            return;
        }
        const freelancer = msg.mentions[0]
        const customer = msg.author.mention
        let review = suffix.replace(`<@!${msg.mentions[0].id}> `,"").split(" ")[0].match(/(10|[1-9])/gm) ? suffix.replace(`<@!${msg.mentions[0].id}> `,"").split(" ")[0] : "No Rating Left"
        if(parseInt(review) >= 10) {
            review = 5
        }
        if(parseInt(review) < 0){
            review = 0
        }
        const comment = suffix.replace(`<@!${msg.mentions[0].id}>`,"").replace(/(10|[1-9])/gm, "")
        global.logger.log(suffix)
        const time = moment().format('l')
        if(!msg.channel.guild.members.find(user => user.id === freelancer.id).roles.includes(msg.channel.guild.roles.find(role => role.id === '800727344066723840').id)) {
            msg.channel.createMessage('That user isn\'t a freelancer!')
            return
        }
        const embed = msg.channel.createEmbed()
            .title('New Review')
            .description(`Review By ${customer}`)
            .field("Freelancer", `${freelancer.mention} - ${calculateStars(review)}`)
            .field("Comment", `${comment}`)
            .color(0xFBF514)
            .footer(time)
            .sendable
        bot.createMessage('800118820525441074', { embed: embed })
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
