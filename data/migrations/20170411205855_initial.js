// ./data/migrations/{timestamp}_initial.js

exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function (table) {
    table.increments('id');
    table.timestamps();
    table.integer('type');
    table.text('content');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
