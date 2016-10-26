'use strict';
var bookshelf = require('../bookshelf');
var User = require('./users');

var Stores =  bookshelf.Model.extend({
    tableName: 'stores',
    owner: function() {
      return this.belongsTo(User);
    }
});

module.exports = Stores;
