angular.module('app')

  .factory('PrivacyService', function ($http) {
    return {
      acceptPrivacy: function (mySessionId, userid, matricularnr) {
        var config = { headers: {'x-session': mySessionId, 'x-key': userid}};
        return $http.put(options.api.base_url + 'api/updateStudent/'+ matricularnr, {
          privacyflag: true
        }, config);
      },

      logOut: function (mySessionId) {
        return $http.post(options.api.base_url + 'logout', {
          headers: {'x-session': mySessionId}
        });
      }
    };
  });
