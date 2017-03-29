'use strict'
var bookshelf = require('../bookshelf');
var Professionnel = bookshelf.Model.extend({
	 tableName: 'professionnel',
});

module.exports = Professionnel;