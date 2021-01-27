module.exports = {
  meta: {
    help: "Generate a paypal.me link",
    level: 0
  },
  exec: (msg, suffix) => {
    args = suffix.split(' ')
    link = "https://paypal.me/" + args[0] + "/" + args[1]
    msg.delete()
    msg.channel.createEmbed()
      .title("Please click this link to pay your freelancer!")
      .description("[" + link + "](" + link + ")")
      .footer(`Lemon Studios • Requested by ${msg.author.username}`, null)
      .color(0xFBF514)
      .send()
  }
}
