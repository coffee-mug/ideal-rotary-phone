'use strict';
var credential = require('credential');
var Users = require('../models/users');
var pw = credential()

var verify = function verify(email, password, verified) {
    Users.where('emailAddress', email).fetch().then( (user) => { 
        if (!user) {
            // From Eric Elliott, p. 142, Programming Javascript Applications
            // No unexpected errors, no user, reason for failure
            console.log('No user found');
            return verified(null, false, {
                message: 'User not found'
            });
        };
        
        console.log('User: ', user);

        pw.verify(user.password, password, function(isValid) {
            if (!isValid) {
                // No unexpected errors, no user, reason for failure
                return verified(null, false, {
                    message: 'incorrect credentials'
                });
            }
            return verified(null, user);
        });
    });
};

module.exports = verify;
