'use strict';
var fs = require('fs');

//Liste de tous les salons
var salons = [];

// UTILS
var readAsync = function(filename) {
  return new Promise( (resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

exports.seed = function(knex, Promise) {
      return Promise.all([
          readAsync('./seeds/terezaProspection1.json').then( data => {
            JSON.parse(data)['hits'].forEach( h => {
                knex.insert({nationalId: '', mail: 'empty', name: h["name"], street: h["address"]["street"], city: h["address"]["city"], postalCode: h["address"]["zipCode"], phone: h["phoneNumber"]})
                    .into('salon');
            })
          })
      ]);
};
