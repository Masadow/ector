const express = require('express')
const app = express()
const {score} = require('./score');
const {add: add_history} = require('./history')
const bodyParser = require('body-parser')


app.use(
    bodyParser.urlencoded({
      extended: true
    })
)
  
app.use(bodyParser.json())

app.get('/score', score)
app.post('/history', add_history)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})