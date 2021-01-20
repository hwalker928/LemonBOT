module.exports = {
  meta: {
    help: "Say Welcome",
    level: 0,
  },
  exec: (msg, suffix) => {
    const welcomeMember = msg.mentions[0]
    msg.channel.createEmbed()
      .title(`Welcome ${welcomeMember.username} to __Lemon Studios__!`)
      .footer(`Lemon Studios • Requested by ${msg.author.username}`, null)
      .image("https://i.pinimg.com/originals/8c/9a/07/8c9a079986a4ce112882fea6db3ffdee.gif")
      .color(0xFBF514)
      .send()
  }
}
