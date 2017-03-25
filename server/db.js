var env = process.env['NODE_ENV'] || 'development'
var config = require('../knexfile.js')[env]
var knex = require('knex')(config)

module.exports = {
  // getTeam: getTeam,
  getTeams: getTeams,
  getFixtures: getFixtures
}

function getTeams () {
  return knex('teams').select()
}

function getFixtures () {
  return knex('fixtures').select()
  // .join('team_fixture', 'teams.team_id', '=', 'team_fixture.team_id')
  // .join('fixtures', 'team_fixture.fixture_id', '=', 'fixtures.fixture_id')
  // .select('name', 'pitch', 'week', 'date', 'goals' )
  }
// function getTeams (testDb) {
//   // Use a test database if one is passed in, or the connection defined above.
//   var db = testDb || connection
//   return db('teams').select()
// }

// function getTeam (id, testDb) {
//   var db = testDb || connection
//   return db('teams').where('id', id)
// }
