'use strict';

/**
 * OpenID Authentication Protocol
 *
 * OpenID is an open standard for federated authentication. When visiting a
 * website, users present their OpenID to sign in. The user then authenticates
 * with their chosen OpenID provider, which issues an assertion to confirm the
 * user's identity. The website verifies this assertion in order to sign the
 * user in.
 *
 * For more information on OpenID in Passport.js, check out:
 * http://passportjs.org/guide/openid/
 *
 * @param   {Object}    request
 * @param   {string}    identifier
 * @param   {Object}    profile
 * @param   {Function}  next
 */
module.exports = function(request, identifier, profile, next) {
    var query = {
        identifier: identifier,
        protocol: 'openid'
    };

    passport.connect(request, query, profile, next);
};
