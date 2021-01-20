module.exports = {
    meta: {
        help: 'A guide on how to leave a review',
        level: 0,
        doNotDocument: true
    },
    exec: async (msg, suffix) => {
        const embed = msg.channel.createEmbed()
            .title('How to submit a review.')
            .description('To leave a review for your freelancer, you can use `!review`')
            .field('__Format:__','**!review <@Freelancer> <1-5> <Review Message>**')
            .field('__Here is an example:__', '**!review <@590651977034366976> 5 They did a great job!**')
            .footer('Lemon Studios Review System')
            .color(0xFBF514)
            .send()
    }
}
