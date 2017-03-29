'use strict'
var bookshelf = require('../bookshelf');

var Prestation = require('./prestation');

var Salon = bookshelf.Model.extend({
	 tableName: 'salon',
   characteristics() {
     return this.belongsToMany(Prestation, 'possede', 'salon_id', 'prestation_id');
   }
});

module.exports = bookshelf.model('Salon', Salon);
