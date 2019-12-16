
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {name: 'Star Wars', userId: 1},
        {name: 'Die Hard', userId: 1},
        {name: 'The End of Evangelion', userId: 2},
        {name: 'Akira', userId: 2},
        {name: 'Joker', userId: 3},
        {name: 'Jurassic Park', userId: 3}
      ]);
    });
};
