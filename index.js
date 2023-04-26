const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

// create routes
app.get('/', (req, res) => {
  res.send('Welcome Google Search')
})

app.get('/results', (req, res) => {
  let str = req.query.search
  console.log(str.toLowerCase())
  let data = [
    {
      title: 'JS testing',
      description: 'The best JavaScript tutorials in the galaxy!',
      url: 'www.testing.com',
      links: [
        {
          title: 'JS for Beginner tests',
          url: 'https://www.w3schools.com/js',
        },
        {
          title: 'JS for the Web',
          url: 'https://www.w3schools.com/js',
        },
      ],
    },
    {
      title: 'Tutorial - W3School',
      description:
        'Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL...',
      url: 'developer.mozilla.org',
      links: [
        {
          title: 'JS Introduction',
          url: 'https://www.w3schools.com/js/js_intro.asp',
        },
        {
          title: 'JS Functions',
          url: 'https://www.w3schools.com/js/js_functions.asp',
        },
      ],
    },
    {
      title: 'JavaScript | MDN',
      description:
        'JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced. Start learning ...',
      url: 'developer.mozilla.org',
      links: [
        {
          title: 'JavaScript Operator',
          url: 'https://www.w3schools.com/js/js_examples.asp',
        },
        {
          title: 'JavaScript Code',
          url: 'https://www.w3schools.com/js/js_functions.asp',
        },
        {
          title: 'JavaScript Meaning',
          url: 'https://www.w3schools.com/js/js_functions.asp',
        },
      ],
    },
  ]

  let filteredResults = data.filter((result) =>
    result.title.toLowerCase().includes(str)
  )

  // if search bar is empty dont show any results
  // if (str == '') {
  //   let emptyArr = []
  //   return emptyArr
  // }

  //   let resultsList = search()
  res.send(filteredResults)
})

app.listen(4000)
