
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('prestation').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('prestation').insert({id: 1, name: "Afro"}),
        knex('prestation').insert({id: 2, name: "Balayage"}),
        knex('prestation').insert({id: 3, name: "Barbier" }),
        knex('prestation').insert({id: 4, name: "Boucles" }),
        knex('prestation').insert({id: 5, name: "Coiffures" }),
        knex('prestation').insert({id: 6, name: "Coloration" }),
        knex('prestation').insert({id: 7, name: "Enfant"}),
        knex('prestation').insert({id: 8, name: "Extensions"}),
        knex('prestation').insert({id: 9, name: "Femme"}),
        knex('prestation').insert({id: 10, name: "Homme"}),
        knex('prestation').insert({id: 11, name: "Lissage"}),
        knex('prestation').insert({id: 12, name: "Mariage"}),
        knex('prestation').insert({id: 13, name: "Soin"})
      ]);
    });
};
