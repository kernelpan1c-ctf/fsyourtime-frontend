angular.module('app')

  .factory('UserService2', function ($http, $window) {
    return {

      acceptPrivacy: function (mySessionId, userid) {
        return $http.put('http://backend-dev.kevinott.de/api/updateStudent/:studentid', {
          headers: {'x-session': mySessionId, 'x-key': userid},
          params: {privacyflag: true, studentid: userid}
        });
      },

      logOut: function (mySessionId) {
        return $http.post('http://backend-dev.kevinott.de/logout', {
          headers: {'x-session': mySessionId}
        });
      }
    };
  });
