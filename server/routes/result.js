var express = require('express')
var router = express.Router()

var db = require('../db')

router.post('/', function (req, res) {
  db.saveResult(req.body)
    .then(() => {
      res.sendStatus(201)
    })
})

module.exports = router
