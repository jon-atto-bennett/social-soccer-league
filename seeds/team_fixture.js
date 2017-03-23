
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('team_fixture').del()
    .then(function () {
      // Inserts seed entries
      return knex('team_fixture').insert([

    {team_id: 99001, fixture_id: 4001, pitch: 'A', goals: null, points: null },
    {team_id: 99002, fixture_id: 4001, pitch: 'B', goals: null, points: null },
    {team_id: 99003, fixture_id: 4001, pitch: 'C', goals: null, points: null },
    {team_id: 99004, fixture_id: 4001, pitch: 'D', goals: null, points: null },
    {team_id: 99005, fixture_id: 4001, pitch: 'E', goals: null, points: null },
    {team_id: 99006, fixture_id: 4001, pitch: 'F', goals: null, points: null },

    {team_id: 99001, fixture_id: 4002, pitch: 'A', goals: null, points: null },
    {team_id: 99003, fixture_id: 4002, pitch: 'B', goals: null, points: null },
    {team_id: 99002, fixture_id: 4002, pitch: 'C', goals: null, points: null },
    {team_id: 99005, fixture_id: 4002, pitch: 'D', goals: null, points: null },
    {team_id: 99004, fixture_id: 4002, pitch: 'E', goals: null, points: null },
    {team_id: 99006, fixture_id: 4002, pitch: 'F', goals: null, points: null },

    {team_id: 99001, fixture_id: 4003, pitch: 'A', goals: null, points: null },
    {team_id: 99004, fixture_id: 4003, pitch: 'B', goals: null, points: null },
    {team_id: 99002, fixture_id: 4003, pitch: 'C', goals: null, points: null },
    {team_id: 99006, fixture_id: 4003, pitch: 'D', goals: null, points: null },
    {team_id: 99003, fixture_id: 4003, pitch: 'E', goals: null, points: null },
    {team_id: 99005, fixture_id: 4003, pitch: 'F', goals: null, points: null },

    {team_id: 99001, fixture_id: 4004, pitch: 'A', goals: null, points: null },
    {team_id: 99005, fixture_id: 4004, pitch: 'B', goals: null, points: null },
    {team_id: 99002, fixture_id: 4004, pitch: 'C', goals: null, points: null },
    {team_id: 99003, fixture_id: 4004, pitch: 'D', goals: null, points: null },
    {team_id: 99004, fixture_id: 4004, pitch: 'E', goals: null, points: null },
    {team_id: 99006, fixture_id: 4004, pitch: 'F', goals: null, points: null },

    {team_id: 99001, fixture_id: 4005, pitch: 'A', goals: null, points: null },
    {team_id: 99006, fixture_id: 4005, pitch: 'B', goals: null, points: null },
    {team_id: 99002, fixture_id: 4005, pitch: 'C', goals: null, points: null },
    {team_id: 99004, fixture_id: 4005, pitch: 'D', goals: null, points: null },
    {team_id: 99003, fixture_id: 4005, pitch: 'E', goals: null, points: null },
    {team_id: 99006, fixture_id: 4005, pitch: 'F', goals: null, points: null },
    ]);
  });
};
