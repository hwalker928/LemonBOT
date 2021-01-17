const { MessageEmbed } = require('discord.js')

module.exports = {
  meta: {
    help: 'A guide on how to leave a review',
    level: Infinity,
    doNotDocument: true
  },
  exec: async (msg, suffix) => {
    const embed = new MessageEmbed()
      .setTitle('How to submit a review.')
      .setDescription('To leave a review for your freelancer, you can use `!review`')
      .addField('__Format:__', '**!review <@Freelancer> <1-10>/10 <Review Message>**')
      .addField('__Here is an example:__', '**!review <@590651977034366976> 10/10 They did a great job!**')
      .setFooter('Lemon Studios Review System')
      .setColor(0xFBF514)
    await msg.channel.send(embed)
  }
}
