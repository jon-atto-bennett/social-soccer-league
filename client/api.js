import request from 'superagent'

const url = require('url')

const config = require('../config')

var teamsUrl = url.format(config)

export default {
  getTeams: getTeams,
  getFixtures: getFixtures,
  getTable: getTable,
  appendResult: appendResult
}

function getTeams (callback) {
  request
    .get(teamsUrl + '/teams')
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

function getFixtures (callback) {
  request
    .get(teamsUrl + '/fixtures')
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

function getTable (callback) {
  request
    .get(teamsUrl + '/table')
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

function appendResult (result, callback) {
  request
    .post(teamsUrl + '/result')
    .send(result)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback()
      }
    })
}
