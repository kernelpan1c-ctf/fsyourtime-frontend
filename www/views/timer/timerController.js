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

    //get Perofrmance Date
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
      dd='0'+dd
    }

    if(mm<10) {
      mm='0'+mm
    }

    today = mm+'/'+dd+'/'+yyyy;




    //Submit Data
    $scope.submit = function () {
      data.seconds = 0;

      $scope.sessionId = $window.sessionStorage.token;
      $scope.username = $window.sessionStorage.username;
      $scope.moduleid = $scope.select.course;
      $scope.performancedate = today;
      $rootScope.notify($scope.moduleid);


      Efforts.save(sessionId, username, amount, moduleid, studentid, efftypeid, performancedate);
    };


    //Get Modules und Efforts for dropdown
    // Real API related Data
    $scope.sessionId = $window.sessionStorage.token;
    $scope.username = $window.sessionStorage.username;

    //Get Modules
    $scope.modules = Modules.query(sessionId,username);



});



