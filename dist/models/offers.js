'use strict';

var bookshelf = require('../bookshelf');
var Prestation = require('./prestations');
var Salon = require('./wonderful_salons');

var Offers = bookshelf.Model.extend({
    tableName: 'offers',
    prestation: function() {
      return this.hasOne(Prestation);
    },
    salon: function() {
      return this.hasOne(Salon);
    }
});

module.exports = Offers; 
