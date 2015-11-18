angular.module('app')

  .factory('UserService', function ($http, $window) {
    return {
      signIn: function (username, password, syncdata) {   //service executed by controller function singIn
        return $http.post(options.api.base_url + 'login', {   //connection with backend
          username: username,
          password: password,
          syncdata: syncdata
        });
      },

      getModules: function (mySessionId, userid) {
        return $http.get(options.api.base_url + 'api/modules/student/', {
          headers: {'x-session': mySessionId, 'x-key': userid}
        });
      }
    }
  });
