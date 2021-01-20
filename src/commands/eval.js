const { inspect } = require('util')
const fetch = require('node-fetch')

module.exports = {
  meta: {
    help: 'Evaluate arbitrary Javascript code.',
    level: Infinity,
    doNotDocument: true
  },

  exec: async (msg, suffix) => {
    const script = suffix
    if (!script) {
      return msg.channel.createMessage('do you expect me to suppose the code you want to run?')
    }

    const m = await msg.channel.createMessage('<a:loading:660094837437104138> Computing...')
    const start = Date.now()

    let js = `${script}`
    if (js.includes('await')) js = `(async () => { ${script} })()`
    let result
    try {
      // eslint-disable-next-line no-eval
      result = await eval(js)
    } catch (err) {
      result = err
    }

    const plsNoSteal = RegExp(`${process.env.BOT_TOKEN}`)
    result = inspect(result, {depth: 1}).replace(plsNoSteal, 'haha no')
    const processing = ((Date.now() - start) / 1000).toFixed(2)
    if (result.length > 1900) {
      const res = await fetch('https://paste.harrydev.me/documents', {
        method: 'POST',
        body: result
      }).then(r => r.json())
      m.edit(`Result too long for Discord: <https://paste.harrydev.me/${res.key}.js>\nTook ${processing} seconds.`)
    } else {
      m.edit(`\`\`\`js\n${result}\n\`\`\`\nTook ${processing} seconds.`)
    }
  }
}
