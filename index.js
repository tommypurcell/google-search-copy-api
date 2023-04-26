const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

// create routes
app.get('/', (req, res) => {
  res.send('Welcome Google Search')
})

app.get('/results', (req, res) => {
  let str = req.query
  function search(e, str) {
    e.preventDefault()
    let matchingResults = []

    const filteredResults = data.filter((result) =>
      result.title.toLowerCase().includes(str.toLowerCase())
    )
    setResults(filteredResults)

    // if search bar is empty dont show any results
    if (str == '') {
      let emptyArr = []
      setResults(emptyArr)
    }
    console.log(filteredResults)
    console.log(results)
  }
})

// create results route
app.get('/results', (req, res) => {})

app.listen(4000)
