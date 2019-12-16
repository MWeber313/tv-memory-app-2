
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Mack', password: 'pass'},
        {username: 'We Abu', password: 'pass'},
        {username: 'Choiceless', password: 'pass'}
      ]);
    });
};
