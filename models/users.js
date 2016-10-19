'use strict';

var bookshelf = require('../bookshelf');

var Users = bookshelf.Model.extend({
    tableName: 'users',
});

module.exports = Users; 
