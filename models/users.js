'use strict';

var bookshelf = require('../bookshelf');
var Store = require('./Stores');

var Users = bookshelf.Model.extend({
    tableName: 'users',
    store: function() {
      return this.hasOne(Store);
    }
});

module.exports = Users; 
