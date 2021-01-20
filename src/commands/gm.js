module.exports = {
  meta: {
    help: "Say good morning",
    level: 0,
  },
  exec: (msg, suffix) => {
    msg.channel.createEmbed()
      .title("Good morning!")
      .footer(`Lemon Studios • Requested by ${msg.author.username}`, null)
      .image("https://media0.giphy.com/media/xFmwnGWu0UUb0pRIVq/giphy.gif")
      .color(0xFBF514)
      .send()
  }
}
