angular.module('app')

  .factory('UserService', function ($http, $window) {
    return {
      signIn: function (username, password, syncdata) {
        return $http.post('http://backend-dev.kevinott.de/login', {
          username: username,
          password: password,
          syncdata: syncdata
        });
      },

      getModules: function (mySessionId, userid) {
        return $http.get('http://backend-dev.kevinott.de/api/modules/student/', {
          headers: {'x-session': mySessionId, 'x-key': userid}
        });
      }
    }
  });
