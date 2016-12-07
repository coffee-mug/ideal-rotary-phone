'use strict';

var bookshelf = require('../bookshelf');

var Prestations = bookshelf.Model.extend({
    tableName: 'prestations',
});

module.exports = Prestations; 
