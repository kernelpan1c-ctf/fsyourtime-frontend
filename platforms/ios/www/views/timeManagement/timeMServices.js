/**
 * Created by justus on 06.10.15.
 */

angular.module('app')

  .factory('Efforts', function($window) {
    return $http.get('http://backend-dev.kevinott.de/api/efforts', {
      headers: {'x-session': $window.sessionStorage.token, 'x-key': $window.sessionStorage.userid},
      moduleid: $scope.course.id,
      studentid: $window.sessionStorage.token
    });
  })

  .factory('Modules', function($window) {
      return $http.get('http://backend-dev.kevinott.de/api/efforts/module/:moduleid/:studentid', {
        headers: {'x-session': $window.sessionStorage.token, 'x-key': $window.sessionStorage.userid}
      });
    })
