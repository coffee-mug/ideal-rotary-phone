'use strict';

var bookshelf = require('../bookshelf');
var Owner = require('./wonderful_users');

var wonderfulSalons = bookshelf.Model.extend({
    tableName: 'wonderful_salons',
    owner: function() {
      return this.hasOne(Owner);
    }
});

module.exports = wonderfulSalons;
