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



    // Real API related Data
    $scope.sessionId = $window.sessionStorage.token;
    $scope.username = $window.sessionStorage.username;


    $scope.modules = Modules.query(sessionId,username);


});



