
exports.up = function(knex, Promise) {
  return knex.schema.createTable('teams', function (table) {
    table.increments('team_id').primary()
    table.string('name')
    table.integer('points')
    table.integer('games_played')
    table.integer('won')
    table.integer('drawn')
    table.integer('lost')
    table.integer('goals_for')
    table.integer('goals_against')
    table.integer('goal_diff')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('teams')
};
