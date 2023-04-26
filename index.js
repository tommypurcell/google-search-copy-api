const express = require('express')
const app = express()

// create routes
app.get('/', (req, res) => {
  res.send('Welcome Google Search')
})

app.listen(4000)
