'use strict';

exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('stores', function(table) {
            table.increments();
            table.string('raisonSoc');
            table.string('adresse');
            table.string('adresse_complement');
            table.string('ville');
            table.string('cp');
            table.string('tel');
            table.text('description');
            table.integer('user_id').unsigned().unique().references('users.id');
            table.timestamps();
        })
    ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('stores')
    ]);
};
