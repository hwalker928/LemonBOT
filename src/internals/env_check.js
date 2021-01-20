const required = [
    'BOT_TOKEN',
    'BOT_PREFIX',
    'GAMEMASTER',
    'REVIEW_CHANNEL'
]

for (const x of required) {
    if (!process.env[x]) {
        global.logger.error(`Missing environment variable ${x}`, true)
    }
}
