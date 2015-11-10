/**
 * Created by justus on 06.10.15.
 */

angular.module('app')

  .factory('Efforts', function($http, $window) {
    return $http.get('http://backend-dev.kevinott.de/api/efforts/module/:moduleid/:studentid', {
      headers: {'x-session': $window.sessionStorage.mySessionId, 'x-key': $window.sessionStorage.userid},
      //moduleid: $scope.courses.id,
      studentid: $window.sessionStorage.matricularnr
    });
  })

  .factory('Modules', function($http, $window) {
    return $http.get('http://backend-dev.kevinott.de/api/modules/student/', {
      headers: {'x-session': $window.sessionStorage.mySessionId, 'x-key': $window.sessionStorage.userid}
    });
  })
