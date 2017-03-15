'use strict';


exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('professionnel', (table) => {
      table.increments();
      table.string('mail').unique();
      table.string('firstName');
      table.string('lastName');
      table.string('password');
      table.integer('salonId').unsigned().references('id').inTable('salon');
      table.integer('professionId').unsigned().references('id').inTable('profession');
    }),

		knex.schema.createTableIfNotExists('categories', (table) => {
			table.increments();
			table.string('name');
		}),
    knex.schema.createTableIfNotExists('salon', (table) => {
      table.increments();
      table.string('nationalId').unique();
      table.string('mail').unique();
      table.string('name');
      table.string('street');
      table.string('city');
      table.string('postalCode');
      table.string('phone');
    }),

    knex.schema.createTableIfNotExists('profession', (table) => {
      table.increments();
      table.string('name');
    }),

    knex.schema.createTableIfNotExists('atout', (table) => {
      table.increments();
      table.string('name');
    }),

    knex.schema.createTableIfNotExists('prestation', (table) => {
      table.increments();
      table.string('name');
      table.integer('duration');
      table.float('price');
    }),

    knex.schema.createTableIfNotExists('user', (table) => {
      table.increments();
      table.string('mail').unique();
      table.string('firstName');
      table.string('lastName');
      table.string('password');
    }),

    knex.schema.createTableIfNotExists('appointment', (table) => {
      table.increments();
      table.dateTime('dateAppointment');
      table.integer('professionnel_id').unsigned().references('id').inTable('professionnel');
      table.integer('user_id').unsigned().references('id').inTable('user');
    }),

    knex.schema.createTableIfNotExists('possede', (table) => {
      table.increments();
      table.integer('salon_id').unsigned().references('id').inTable('salon');
      table.integer('atout_id').unsigned().references('id').inTable('atout');
      table.integer('prestation_id').unsigned().references('id').inTable('prestation');
    }),

    knex.schema.createTableIfNotExists('compose', (table) => {
      table.increments();
      table.integer('appointment_id').unsigned().references('id').inTable('appointment');
      table.integer('prestation_id').unsigned().references('id').inTable('prestation');
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('professionnel'),
    knex.schema.dropTableIfExists('salon'),
    knex.schema.dropTableIfExists('profession'),
    knex.schema.dropTableIfExists('atout'),
    knex.schema.dropTableIfExists('prestation'),
    knex.schema.dropTableIfExists('user'),
    knex.schema.dropTableIfExists('appointment'),
    knex.schema.dropTableIfExists('possede'),
    knex.schema.dropTableIfExists('compose'),
    knex.schema.dropTableIfExists('categories'),
  ]);
};
