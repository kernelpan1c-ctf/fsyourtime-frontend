/**
 * Created by justus on 06.10.15.
 */

angular.module('app')

  .factory('Efforts', function($window) {
    return $http.get('http://backend-dev.kevinott.de/api/modules/student/', {
      //headers: {'x-session': $window.sessionStorage.token, 'x-key': irgendwas},
      //moduleid: $scope.course,
     // studentid: irgendwas
    });
  })

  .factory('Modules', function($window) {
      return $http.get('http://backend-dev.kevinott.de/api/modules/student/', {
        //headers: {'x-session': $window.sessionStorage.token, 'x-key': 0}
      });
    })
