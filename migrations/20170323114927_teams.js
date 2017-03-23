
exports.up = function(knex, Promise) {
  return knex.schema.createTable('teams', function (table) {
    table.increments('team_id').primary()
    table.string('name')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('teams')
};
