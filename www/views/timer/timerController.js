angular.module('app')

  .controller('MainCtrl2', function ($scope, $interval) {

    // The main controller maintains the current time for all stopwatch instances.
    $scope.sharedTime = new Date();
    $interval(function () {
      $scope.sharedTime = new Date();
    }, 500);
  })

  .directive('stopwatch', function () {
    return {
      restrict: 'AE',
      templateUrl: 'views/timer/timerView.html',
      scope: {
        // Set title in the isolate scope from the title attribute on the directive's element.
        title: '@title',
        // Set up a bi-directional binding between currentTime on the local scope and the parent
        // scope's variable containing the current time that's the value of the time attribute.
        currentTime: '=time'
      },

      link: function (scope, element, attrs, ctrl) {
      },

      controllerAs: 'swctrl',
      controller: function ($scope, $interval) {
        console.log("Creating the directive's controller");
        var self = this;
        var totalElapsedMs = 0;
        var elapsedMs = 0;
        //var time;
        var startTime;
        var timerPromise;
        self.start = function () {
          if (!timerPromise) {
            startTime = new Date();
            timerPromise = $interval(function () {
              var now = new Date();
              //$scope.time = now;
              elapsedMs = now.getTime() - startTime.getTime();
            }, 31);
          }
        };

        self.stop = function () {
          if (timerPromise) {
            $interval.cancel(timerPromise);
            timerPromise = undefined;
            totalElapsedMs += elapsedMs;
            elapsedMs = 0;
          }
        };

        self.reset = function () {
          startTime = new Date();
         // totalElapsedMs = elapsedMs = 0;
        };

        self.getTime = function () {
          return time;
        };

        self.getElapsedMs = function () {
          return totalElapsedMs + elapsedMs;
        };
      }
    }
  })

  .filter('numberFixedLen', function () {
    return function (n, len) {
      var num = parseInt(n, 10);
      len = parseInt(len, 10);
      if (isNaN(num) || isNaN(len)) {
        return n;
      }
      num = '' + num;
      while (num.length < len) {
        num = '0' + num;
      }
      return num;
    };
  })

  .constant('SW_DELAY', 1000)

  .controller('MainCtrl', function ($rootScope, $scope, $state, stepwatch, Modules, Efforts, $window, EffortTypes) {
    $scope.myStopwatch = stepwatch;
    $scope.timerRunning = false;
    $scope.select = {};

    $scope.efforts = EffortTypes.query();
    $scope.modules = Modules.query();


    //get Perofrmance Date
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd
    }

    if (mm < 10) {
      mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;



    //Submit Data
    $scope.submit = function () {
      var amount = stepwatch.data.hours * 60 + stepwatch.data.minutes;

      Efforts.save(sessionStorage.mySessionId, sessionStorage.userid, amount,
        $scope.select.module, sessionStorage.matricularnr, $scope.select.effort, today).error(function (status, data) {
          console.log(status);
          console.log(data);
        })
      };

    $scope.timerstart = function () {
      $scope.myStopwatch.start();
      $scope.timerRunning = true;
    };
    $scope.timerstop = function() {
      $scope.myStopwatch.stop();
      $scope.timerRunning = false;
    };
  });

