const { exec } = require('child_process')

module.exports = {
  meta: {
    help: 'Run commands on the host machine',
    level: Infinity,
    doNotDocument: true
  },
  exec: async (msg, suffix) => {
    const cmd = suffix
    if(!cmd) {
      return msg.channel.send('No Command')
    }

    const m = await msg.channel.createMessage('<a:loading:788845427072040991> Computing...')
    const start = Date.now()

    exec(cmd, async (e, out, err) => {
      const result = e ? err : out

      const processing = ((Date.now() - start) / 1000).toFixed(2)
      if (result.length > 1900) {
        //   const res = await fetch('https://haste.powercord.dev/documents', { method: 'POST', body: result }).then(r => r.json())
        //   m.edit(`Result too long for Discord: <https://haste.powercord.dev/${res.key}.txt>\nTook ${processing} seconds.`)
        m.edit(`Result too long for Discord\nTook ${processing} seconds.`)
      } else {
        m.edit(`\`\`\`\n${result}\n\`\`\`\nTook ${processing} seconds.`)
      }
    })
  }
}