var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path')

var teams = require('./routes/teams')
var fixtures = require('./routes/fixtures')
var table = require('./routes/table')
var result = require('./routes/result')

var app = express()

app.use(bodyParser.json())
app.use(cors({origin: 'http://localhost:8080'}))
app.use(express.static(path.join(__dirname, '../public')))
app.use('/teams', teams)
app.use('/fixtures', fixtures)
app.use('/table', table)
app.use('/result', result)

module.exports = app
