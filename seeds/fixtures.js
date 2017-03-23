
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fixtures').del()
    .then(function () {
      // Inserts seed entries
      return knex('fixtures').insert([
        {fixture_id: 4001, week: 1, date: '4/4/2017'},
        {fixture_id: 4002, week: 2, date: '11/4/2017'},
        {fixture_id: 4003, week: 3, date: '18/4/2017'},
        {fixture_id: 4004, week: 4, date: '25/4/2017'},
        {fixture_id: 4005, week: 5, date: '3/5/2017'},
      ]);
    });
};
