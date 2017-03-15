'use strict'
var bookshelf = require('../bookshelf');
var User = bookshelf.Model.extend({
	 tableName: 'user',
});

module.exports = User;