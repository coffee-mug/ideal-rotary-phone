
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profession').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('profession').insert({name: 'coiffeur'}),
        knex('profession').insert({ name: 'barbier'}),
      ]);
    });
};
