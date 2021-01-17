const drivers = require('../internals/dirscan')('../databases')
const preferred = `${process.env.PREFERRED_DATABASE || 'lokijs'}.js`

if (drivers.indexOf(preferred) === -1) {
    global.logger.error(`No database driver available called ${preferred}, available choices: ${drivers.join(', ')}`, true)
}

if (global.logger) global.logger.debug(`Using ${preferred} database driver`)
module.exports = require(`../databases/${preferred}`)