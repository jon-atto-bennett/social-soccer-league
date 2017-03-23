
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('teams').insert([
        {team_id: 99001, name: 'Monkey United'},
        {team_id: 99002, name: 'Westy Hammers'},
        {team_id: 99003, name: 'Chelski'},
        {team_id: 99004, name: 'Tootem Spuds'},
        {team_id: 99005, name: 'Aardvaark'},
        {team_id: 99006, name: 'Loverpill'},
      ]);
    });
   };
