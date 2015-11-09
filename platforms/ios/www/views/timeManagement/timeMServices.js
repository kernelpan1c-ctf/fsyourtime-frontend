/**
 * Created by justus on 06.10.15.
 */

angular.module('app')

  .factory('Efforts', function($window) {
    return $http.get('http://backend-dev.kevinott.de/api/modules/student/', {
      headers: {'x-session': $window.sessionStorage.token.getItem('mySessionId'), 'x-key': $window.sessionStorage.token.getItem('userid')},
      moduleid: $scope.course,
      studentid: $window.sessionStorage.token.getItem('matricularnr')
    });
  })

  .factory('Modules', function($window) {
      return $http.get('http://backend-dev.kevinott.de/api/modules/student/', {
        headers: {'x-session': $window.sessionStorage.token.getItem('mySessionId'), 'x-key': $window.sessionStorage.token.getItem('userid')}
      });
    })
