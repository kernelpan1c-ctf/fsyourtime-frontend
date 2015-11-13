angular.module('app')

  .factory('PrivacyService', function ($http) {
    return {
      acceptPrivacy: function (mySessionId, userid) {
        var config = { headers: {'x-session': mySessionId, 'x-key': userid}};
        return $http.put('http://backend-dev.kevinott.de/api/updateStudent/'+ userid, {
          privacyflag: true
        }, config);
      },

      logOut: function (mySessionId) {
        return $http.post('http://backend-dev.kevinott.de/logout', {
          headers: {'x-session': mySessionId}
        });
      }
    };
  });
