const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

// create routes
app.get('/', (req, res) => {
  res.send('Welcome Google Search')
})

// create results route
app.get('/results', (req, res) => {})

app.listen(4000)
