
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('teams').insert([
        {team_id: 99001, name: 'Monkey United', points: null},
        {team_id: 99002, name: 'Westy Hammers', points: null},
        {team_id: 99003, name: 'Chelski', points: null},
        {team_id: 99004, name: 'Tootem Spuds', points: null},
        {team_id: 99005, name: 'Aardvaark', points: null},
        {team_id: 99006, name: 'Loverpill', points: null},
      ]);
    });
   };
