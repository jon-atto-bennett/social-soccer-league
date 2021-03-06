var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getFixtures().then((fixtures) => {
    res.send(fixtures)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})

module.exports = router
