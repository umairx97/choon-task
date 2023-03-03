module.exports = {
  google: {
    sheetId: process.env.GOOGLE_SHEETS_ID || '19zXph8RX2AUAFtTxxf1T7rbihktAp8BmzBCu7zM3u78',
    serviceAccount: JSON.parse(Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT, 'base64').toString('utf8'))
  }
}
