'use strict'
var bookshelf = require('../bookshelf');

require('./possede');
require('./salon');

var Prestation = bookshelf.Model.extend({
	 tableName: 'prestation',
   owner() {
     return this.belongsToMany(Possede);
   },
   salons() {
     return this.belongsToMany(Salon).through(Possede);
   }
});

module.exports = bookshelf.model('Prestation', Prestation);
