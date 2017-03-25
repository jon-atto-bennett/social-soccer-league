
exports.up = function(knex, Promise) {
  return knex.schema.createTable('fixtures', function (table) {
    table.increments('fixture_id').primary()
    table.string('team_1')
    table.string('team_2')
    table.string('pitch')
    table.integer("team_1_goals")
    table.integer("team_2_goals")
    table.integer('week')
    table.string('date')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('fixtures')

};
