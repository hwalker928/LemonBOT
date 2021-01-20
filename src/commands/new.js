module.exports = {
  meta: {
    help: 'Open a new ticket',
    level: Infinity,
    doNotDocument: true
  },
  exec: async (msg, suffix) => {
    const ticketChannel = await msg.channel.guild.createChannel("test-channel", 0, {parentID: "774943698726944768"})
    const embed = msg.channel.createEmbed()
      .title('Ticket opened')
      .description(`<#${ticketChannel.id}>`)
      .footer('Lemon Studios Ticket System')
      .color(0xFBF514)
      .send()
  }
}
