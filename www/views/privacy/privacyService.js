angular.module('app')

  .factory('UserService', function ($http, $window) {
    return {

      acceptPrivacy: function (mySessionId, userid) {
        return $http.put('http://backend-dev.kevinott.de/api/updatestudent/'+ userid, {
          headers: {'x-session': mySessionId},
          privacyflag: true
        });
      },

      logOut: function (mySessionId) {
        return $http.post('http://backend-dev.kevinott.de/logout', {
          headers: {'x-session': SessionId}
        });
      }
    };
  });
