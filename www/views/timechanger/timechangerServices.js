/**
 * Created by Marcel on 28/10/15.
 */

angular.module('app')

  .factory('Efforts', function($http, $window) {
    return $http.get('http://backend-dev.kevinott.de/api/efforts/module/:moduleid/:studentid', {
      headers: {'x-session': $window.sessionStorage.token, 'x-key': $window.sessionStorage.userid},
      //moduleid: $scope.courses.id,
      studentid: $window.sessionStorage.token.matricularnr
    });
  })



