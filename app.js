const express = require('express')
const app = express()

const bodyParser = express.json()

/* ROUTING */
app.get('/', (req, res, next) => {
  res.status('200').send('welcome, yeah')
})


/* END ROUTING */

module.exports = app
