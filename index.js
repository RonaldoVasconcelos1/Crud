const app = require('./src/app')
require('dotenv').config()

app.listen(process.env.APP_PORT || 8000, () => {
  console.log(`back end listening port: ${process.env.APP_PORT}`)
})
