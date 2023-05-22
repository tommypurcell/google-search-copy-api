// import database
const { MongoClient } = require('mongodb')
require('dotenv').config() // Load environment variables from .env file

const client = new MongoClient(
  // connect database through .env
  process.env.DATABASE_CONNECTION
)

const db = client.db('google-search')
const Results = db.collection('results')

// import express
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

// create routes
app.get('/', (req, res) => {
  res.send('Welcome Google Search')
})

app.get('/results', async (req, res) => {
  let str = req.query.search
  console.log(str)
  // if search bar is empty dont show any results
  if (str == '') {
    r = []
    console.log(r)
    res.send(r)
  } else {
    // else show results that match search term
    await client.connect()
    let r = await Results.find({
      // added $or
      $or: [
        { title: { $regex: str, $options: 'i' } },
        { description: { $regex: str, $options: 'i' } },
        { url: { $regex: str, $options: 'i' } },
      ],
    }).toArray()
    console.log(r)
    res.send(r)
  }
})

app.listen(process.env.PORT || 4000, () => {
  console.log('Server is Listening on ' + process.env.PORT)
})
