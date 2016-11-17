'use strict';

var bookshelf = require('../bookshelf');
var Store = require('./stores');

var Users = bookshelf.Model.extend({
    tableName: 'users',
    store: function() {
      return this.hasOne(Store);
    }
});

module.exports = Users; 
