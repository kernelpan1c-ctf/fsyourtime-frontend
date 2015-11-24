angular.module('app')

  .factory('PrivacyService', function ($http) {
    return {
      acceptPrivacy: function (mySessionId, userid) {   //service executed by controller function privacy
        var config = { headers: {'x-session': mySessionId, 'x-key': userid}};
        return $http.put(options.api.base_url + 'api/students/'+ userid, {
          privacyflag: true
        }, config);
      },

      logOut: function (mySessionId) {    //service executed by controller function decline
        return $http.post(options.api.base_url + 'logout', {
          headers: {'x-session': mySessionId}
        });
      }
    };
  });
