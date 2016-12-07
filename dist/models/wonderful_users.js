'use strict';

var bookshelf = require('../bookshelf');
var Role = require('./roles');

var wonderfulUsers = bookshelf.Model.extend({
    tableName: 'wonderful_users',
    role: function() {
      return this.hasOne(Role);
    }
});

module.exports = wonderfulUsers; 
