var environment = process.env.NODE_ENV || 'development'
var config = require('../knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  getTeam: getTeam,
  getTeams: getTeams
}

function getTeams (testDb) {
  // Use a test database if one is passed in, or the connection defined above.
  var db = testDb || connection
  return db('teams').select()
}

function getTeam (id, testDb) {
  var db = testDb || connection
  return db('teams').where('id', id)
}
