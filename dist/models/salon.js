'use strict'
var bookshelf = require('../bookshelf');

var Salon = bookshelf.Model.extend({
	 tableName: 'salon',
});

module.exports = bookshelf.model('Salon', Salon);
