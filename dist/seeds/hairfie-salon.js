'use strict';
var fs = require('fs');

// UTILS
var readAsync = function(filename) {
  return new Promise( (resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

var createRecord = function(knex, data) {
  return knex('salon').insert({
    nationalId: 'empty',
    mail: 'empty',
    name: data.name,
    street: data.address.street,
    city: data.address.city,
    postalCode: data.address.zipCode,
    phone: data.phone,
    lat: data.gps.lat,
    lng: data.gps.lng
  });
};


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  var records = [];

  readAsync('./seeds/terezaProspection1.json').then( data => {
    JSON.parse(data)['hits'].forEach( h => {
      records.push(createRecord(knex, h));
    })
  });

  return knex('salon').del()
    .then(function () {
      console.log(records.length);
      return Promise.all(records);
    });
};
