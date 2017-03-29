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
  console.log(result)
}
