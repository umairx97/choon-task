const cors = require('cors')
const bodyParser = require('body-parser')
const pinoLogger = require('express-pino-logger')

module.exports = {
  cors: cors(),
  bodyParser,
  logger: logger()
}

function logger () {
  return pinoLogger({
    level: process.env.NODE_ENV === 'test' ? 'silent' : 'info',
    redact: [
      'res.headers["set-cookie"]',
      'req.headers.cookie',
      'req.headers.authorization'
    ]
  })
}
