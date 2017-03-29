'use strict'
var bookshelf = require('../bookshelf');
var Profession = bookshelf.Model.extend({
	 tableName: 'profession',
});

module.exports = Profession;