'use strict'
var bookshelf = require('../bookshelf');
var Compose = bookshelf.Model.extend({
	 tableName: 'compose',
});

module.exports = Compose;