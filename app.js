var express = require('express'),
    logger = require('morgan'),
    serveStatic = require('serve-static')

var app = express()

// View engine setup
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

// app.use(logger())
app.use(serveStatic(__dirname + '/public'))

app.use(function(req, res, next) {
  console.log(req.method, req.url)
  next()
})

app.get('/hi', function(req, res) {
  res.send('Hey!')
})

app.get('/', function(req, res) {
  res.render('index', { title: 'Express' })
})

app.listen(3000)
