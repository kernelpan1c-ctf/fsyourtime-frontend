angular.module('app')

  .factory('SettingsService', function ($http, $window) {
    return {
      deleteAccount: function (mySessionId, userid) {
        return $http.delete(options.api.base_url + 'api/students/', {
          headers: {'x-session': mySessionId, 'x-key': userid}
        });
      },

      save: function () {
        //save changes
      },

      logOut: function (mySessionId) {    //service executed by controller function decline
        return $http.post(options.api.base_url + 'logout', {
          headers: {'x-session': mySessionId}
        });
      }

    };
  });
