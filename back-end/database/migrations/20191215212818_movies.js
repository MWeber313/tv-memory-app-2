
exports.up = function(knex) {
  return knex.schema.createTable('movies', users => {
      users.increments('id');
      users.string('name').notNullable().unique();
      users.integer('userId').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('movies');
};
