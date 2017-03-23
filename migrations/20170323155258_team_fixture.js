
exports.up = function(knex, Promise) {
  return knex.schema.createTable('team_fixture', function (table) {
    table.integer('team_id')
    table.integer('fixture_id')
    table.string('pitch')
    table.integer('goals')
    table.integer('points')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('team_fixtures')
};
