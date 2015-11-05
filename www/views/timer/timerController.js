angular.module('app')

  .filter('numberFixedLen', function () {
    return function (n, len) {
      var num = parseInt(n, 10);
      len = parseInt(len, 10);
      if (isNaN(num) || isNaN(len)) {
        return n;
      }
      num = ''+num;
      while (num.length < len) {
        num = '0'+num;
      }
      return num;
    };
  })

  .constant('SW_DELAY', 1000)


  .controller('MainCtrl', function($scope, $state, stepwatch, Modules, Efforts, $window) {
    $scope.myStopwatch = stepwatch;


    $scope.submit = function () {
      data.seconds = 0;

      $scope.sessionId = $window.sessionStorage.token;
      $scope.username = $window.sessionStorage.username;
      $scope.moduleid = $scope.select.course;
      $rootScope.notify($scope.moduleid);
      Efforts.save(sessionId, username, amount, moduleid, studentid, efftypeid, performancedate);
    };

    // Real API related Data
    $scope.sessionId = $window.sessionStorage.token;
    $scope.username = $window.sessionStorage.username;

    //Get Modules
    $scope.modules = Modules.query(sessionId,username);



});



