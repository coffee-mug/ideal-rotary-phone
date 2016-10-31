'use strict';

var bookshelf = require('../bookshelf');

var Prospection = bookshelf.Model.extend({
  tableName: 'prospection'
});

module.exports = Prospection;
