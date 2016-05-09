var express = require('express')

// Creating the app

var app = express()
app.use(express.static('public'))

app.listen(3000, function() {
  console.log('Express server is up on port 3000')
})
