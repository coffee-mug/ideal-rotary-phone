'use strict'
var bookshelf = require('../bookshelf');

require('./salon');

var Prestation = bookshelf.Model.extend({
	 tableName: 'prestation',
   salons() {
     return this.belongsToMany(Salon, 'possede', 'prestation_id', 'salon_id');
   }
});

module.exports = bookshelf.model('Prestation', Prestation);
