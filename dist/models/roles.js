'use strict';
var bookshelf = require('../bookshelf');

var Roles = bookshelf.Model.extend({
    tableName: 'roles'
}); 

module.exports = Roles;
