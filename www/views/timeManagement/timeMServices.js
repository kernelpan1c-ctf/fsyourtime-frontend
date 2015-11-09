/**
 * Created by justus on 06.10.15.
 */

angular.module('app')

  .factory('Efforts', function($window) {
    return $http.get('http://backend-dev.kevinott.de/api/modules/student/', {
      headers: {'x-session': $window.sessionStorage.token.mySessionId, 'x-key': $window.sessionStorage.token.userid},
      moduleid: $scope.course,
      studentid: $window.sessionStorage.token.matricularnr
    });
  })

  .factory('Modules', function($window) {
      return $http.get('http://backend-dev.kevinott.de/api/modules/student/', {
        headers: {'x-session': $window.sessionStorage.token.mySessionId, 'x-key': $window.sessionStorage.token.userid}
      });
    })
