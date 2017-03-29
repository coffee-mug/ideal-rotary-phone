'use strict'
var bookshelf = require('../bookshelf');

require('./prestation');

var Possede = bookshelf.Model.extend({
	 tableName: 'possede',
   prestations() {
    return this.hasMany(Prestation);
   }
});

module.exports = bookshelf.model('Possede', Possede);
