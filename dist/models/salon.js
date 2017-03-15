'use strict'
var bookshelf = require('../bookshelf');

var Prestation = require('./prestation');
var Possede = require('./possede');

var Salon = bookshelf.Model.extend({
	 tableName: 'salon',
   characteristics() {
     return this.hasMany(Prestation).through(Possede, 'salon_id', 'prestation_id')
   }
});

module.exports = bookshelf.model('Salon', Salon);
