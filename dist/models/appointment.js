'use strict'
var bookshelf = require('../bookshelf');
var Appointment = bookshelf.Model.extend({
	 tableName: 'appointment',
});

module.exports = Appointment;