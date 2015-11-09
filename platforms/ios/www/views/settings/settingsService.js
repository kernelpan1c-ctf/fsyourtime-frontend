angular.module('app')

  .factory('UserService', function ($http) {
    return {
      deleteAccount: function () {
        //return $http.set('', {  //check if deletion was successful

        //});
      },

      save: function () {
        //save changes
      },

      logOut: function () {
          //logout after deletion of account
      }

    };
  });
