'use strict';

var environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';

var knex = require('knex')(require('./knexfile')[environment]);

var bookshelf = require('bookshelf')(knex);

// Fix circular dependencies https://github.com/tgriesser/bookshelf/wiki/Plugin:-Model-Registry
bookshelf.plugin('registry');

module.exports = bookshelf;
