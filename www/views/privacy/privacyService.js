angular.module('app')

  .factory('UserService', function ($http) {
    return {
      accept: function () {
        return $http.set('', {  //set accepted privacy in DB

        });
      },

    };
  });
