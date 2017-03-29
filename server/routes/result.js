var express = require('express')
var router = express.Router()

var db = require('../db')

router.post('/', function (req, res) {
  db.saveResult(req.body)
})

module.exports = router
