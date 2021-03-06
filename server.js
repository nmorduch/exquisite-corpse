var express = require('express')
   ,app = express()
   ,bodyParser = require('body-parser')
require('dotenv').config()
var port = process.env.PORT || 5000


app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({
  extended: true
}))

if (process.env.NODE_ENV === 'production') {
  console.log('production mode')
  app.use(express.static('client/build'));
}

var poems = require('./routes/poems')
app.use('/poems', poems)

var counts = require('./routes/counts')
app.use('/counts', counts)

var feed = require('./routes/feed')
app.use('/feed', feed)

app.listen(port, function() {
  console.log('Server is running on port',port)
})

module.exports = app
