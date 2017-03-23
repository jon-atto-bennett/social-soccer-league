
exports.up = function(knex, Promise) {
  return knex.schema.createTable('fixtures', function (table) {
    table.increments('fixture_id').primary()
    table.integer('week')
    table.string('date')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('fixtures')

};
