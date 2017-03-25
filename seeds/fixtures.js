
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fixtures').del()
    .then(function () {
      // Inserts seed entries
      return knex('fixtures').insert([
        {fixture_id: 4001, week: 1, date: '4/4/2017',pitch: 'A', week: 1,
          team_1: 'Monkey United', team_2: 'Westy Hammers', team_1_goals: 0, team_2_goals: 2},
        {fixture_id: 4002, week: 1, date: '4/4/2017',pitch: 'B',week: 1,
          team_1: 'Loverpill', team_2: 'Chelski', team_1_goals: 1, team_2_goals: 1},
        {fixture_id: 4003, week: 1, date: '4/4/2017',pitch: 'C',week: 1,
          team_1: 'Aardvaark', team_2: 'Tootem Spuds', team_1_goals: 2, team_2_goals: 3},

        {fixture_id: 4004, week: 2, date: '11/4/2017',pitch: 'A',week: 2,
          team_1: 'Chelski', team_2: 'Tootem Spuds', team_1_goals: 2, team_2_goals: 1},
        {fixture_id: 4005, week: 2, date: '11/4/2017',pitch: 'B',week: 2,
          team_1: 'Loverpill', team_2: 'Monkey United', team_1_goals: 2, team_2_goals: 1},
        {fixture_id: 4006, week: 2, date: '11/4/2017',pitch: 'C',week: 2,
          team_1: 'Westy Hammers', team_2: 'Aardvaark', team_1_goals: 4, team_2_goals: 0},

        {fixture_id: 4007, week: 3, date: '18/4/2017',pitch: 'A',week: 3,
          team_1: 'Monkey United', team_2: 'Tootem Spuds', team_1_goals: 4, team_2_goals: 4},
        {fixture_id: 4008, week: 3, date: '18/4/2017',pitch: 'B', week: 3,
          team_1: 'Aardvaark', team_2: 'Chelski', team_1_goals: 4 , team_2_goals: 2},
        {fixture_id: 4009, week: 3, date: '18/4/2017',pitch: 'C',week: 3,
          team_1: 'Loverpill', team_2: 'Westy Hammers', team_1_goals: 3 , team_2_goals: 3},

        {fixture_id: 4010, week: 4, date: '25/4/2017',pitch: 'A',week: 4,
          team_1: 'Loverpill', team_2: 'Tootem Spuds', team_1_goals: null, team_2_goals: null},
        {fixture_id: 4011, week: 4, date: '25/4/2017',pitch: 'B',week: 4,
          team_1: 'Westy Hammers', team_2: 'Chelski', team_1_goals: null, team_2_goals: null},
        {fixture_id: 4012, week: 4, date: '25/4/2017',pitch: 'C',week: 4,
          team_1: 'Monkey United', team_2: 'Aardvaark', team_1_goals: null, team_2_goals: null},

        {fixture_id: 4013, week: 5, date: '3/5/2017',pitch: 'A',week: 5,
          team_1: 'Aardvaark', team_2: 'Loverpill', team_1_goals: null, team_2_goals: null},
        {fixture_id: 4014, week: 5, date: '3/5/2017',pitch: 'B',week: 5,
          team_1: 'Monkey United', team_2: 'Chelski', team_1_goals: null, team_2_goals: null},
        {fixture_id: 4015, week: 5, date: '3/5/2017',pitch: 'C',week: 5,
          team_1: 'Tootem Spuds', team_2: 'Westy Hammers', team_1_goals: null, team_2_goals: null},
      ]);
    });
};
