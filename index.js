const express = require('express')
const app = express()

// create routes
app.get('/', (req, res) => {
  res.send('Welcome to the Google Search api')
})

app.listen(4000)
