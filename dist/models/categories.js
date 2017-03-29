'use strict'
var bookshelf = require('../bookshelf');
var Categories = bookshelf.Model.extend({
	 tableName: 'categories',
});

module.exports = Categories;