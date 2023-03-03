// const _ = require('lodash')
// const { GoogleSpreadsheet } = require('google-spreadsheet')
// const config = require('./config').google
// const workSheet = new GoogleSpreadsheet(config.sheetId)
const sampleData = require('./mocks/sample-data.json')

module.exports = {
  getSheetData
}

async function getSheetData (req, res) {
  return res.json(sampleData)
}

// async function loadSheetData () {
//   const rawJson = []
//   await workSheet.useServiceAccountAuth({
//     client_email: config.serviceAccount.client_email,
//     private_key: config.serviceAccount.private_key
//   })
//   await workSheet.loadInfo()

//   const sheetsNames = Array.from(
//     { length: workSheet.sheetCount },
//     (k, v) => workSheet.sheetsByIndex[v].title
//   )

//   const worksheets = await Promise.all(sheetsNames.map(title => workSheet.sheetsByTitle[title]))

//   for (const sheet of worksheets) {
//     // await sheet.loadHeaderRow(1)
//     const obj = {
//       title: sheet.title

//     }
//     const rows = await sheet.getRows()

//     const rowValues = rows.map(row => {
//       const rowData = _.compact(row._rawData)
//       const [type, value] = rowData

//       if (!type || !value) return null

//       return _.compact(row._rawData)
//     })

//     console.log(rowValues)
//   }
// }
