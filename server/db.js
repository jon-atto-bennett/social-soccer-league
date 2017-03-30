var env = process.env['NODE_ENV'] || 'development'
var config = require('../knexfile.js')[env]
var knex = require('knex')(config)

module.exports = {
  // getTeam: getTeam,
  getTeams: getTeams,
  getFixtures: getFixtures,
  getTable: getTable,
  saveResult: saveResult
}

function getTeams () {
  return knex('teams').select()
}

function getFixtures () {
  return knex('fixtures').select()
}

function getTable () {
  return knex('teams').select()
}

function saveResult (result) {
  var id = result.fixture_id
  console.log(result.fixture_id)
  knex('fixtures').where('fixture_id', '=', result.fixture_id)
    .update({
      team_1_goals: result.team_1_goals,
      team_2_goals: result.team_2_goals
    })
    .then(result => {
      return knex('fixtures').select()
      //  where({fixture_id: id})
      // .then(console.lof)
    })
}
