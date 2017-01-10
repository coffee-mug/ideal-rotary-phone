'use strict';

var bookshelf = require('../bookshelf'),
  Owner = require('./wonderful_users'),
  Offers = require('./offers');

var wonderfulSalons = bookshelf.Model.extend({
    tableName: 'wonderful_salons',
    owner: function() {
      return this.hasOne(Owner);
    },
    offers: function() {
      return this.hasMany(Offers, 'salon_id');
    }
});

module.exports = wonderfulSalons;
