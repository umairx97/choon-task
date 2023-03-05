const app = require('express')()
require('dotenv').config()
const { name } = require('../package.json')
const PORT = process.env.PORT || 1337
const api = require('./api')
const middlewares = require('./middlewares')

app.use('*', middlewares.cors)
app.use(middlewares.bodyParser.json({ extended: true }))
app.use(middlewares.logger)

app.get('/sheets-data', api.getSheetData)

app.listen({ port: PORT }, () => {
  console.log(`${name} server running on http://localhost:${PORT}`)
})
