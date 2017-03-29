'use strict'
var bookshelf = require('../bookshelf');
var Atout = bookshelf.Model.extend({
	 tableName: 'atout',
});

module.exports = Atout;