angular.module('app')

.factory('AuthenticationService', function () {
        var auth = {
            isAuthenticated: false,
            isAdmin: false
        };
        return auth;
    });