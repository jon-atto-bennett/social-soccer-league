
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('teams').insert([
        {team_id: 99001, name: 'Monkey United', points: 1, games_played: 3, won: 0, drawn: 1, lost: 2, goals_for: 5, goals_against: 8, goal_diff: -3},
        {team_id: 99002, name: 'Westy Hammers', points: 7, games_played: 3, won: 2, drawn: 1, lost: 0, goals_for: 9, goals_against: 6, goal_diff: 3},
        {team_id: 99003, name: 'Chelski', points: 4, games_played: 3, won: 1, drawn: 1, lost: 1, goals_for: 5, goals_against: 6, goal_diff: -1},
        {team_id: 99004, name: 'Tootem Spuds', points: 4, games_played: 3, won: 1, drawn: 1, lost: 1, goals_for: 8, goals_against: 8, goal_diff: 0},
        {team_id: 99005, name: 'Aardvaark', points: 3, games_played: 3, won: 1, drawn: 0, lost: 2, goals_for: 6, goals_against: 9, goal_diff: -3},
        {team_id: 99006, name: 'Loverpill', points: 5, games_played: 3, won: 1, drawn: 2, lost: 0, goals_for: 6, goals_against: 5, goal_diff: 1}
      ])
    })
}
