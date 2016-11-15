'use strict';

var environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';

var knex = require('knex')(require('./knexfile')[environment]);

var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
