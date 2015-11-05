angular.module('app')

.factory('stepwatch', function (SW_DELAY, $timeout, Efforts) {
  var data = {
      seconds: 0,
      minutes: 0,
      hours: 0
    },
    stopwatch = null;

  var start = function () {
    stopwatch = $timeout(function () {
      data.seconds++;
      if (data.seconds >= 60) {
        data.seconds = 00;
        data.minutes++;
        if (data.minutes >= 60) {
          data.minutes = 0;
          data.hours++;
        }
      }
      start()
      $scope.timerRunning = true;
    }, SW_DELAY);
  };

  var stop = function () {
    $timeout.cancel(stopwatch);
    stopwatch = null;
    $scope.timerRunning = false;
  };

  var reset = function () {
    stop()
    data.seconds = 0;
  };

  return {
    data: data,
    start: start,
    stop: stop,
    reset: reset
  };

})

.factory('Efforts' , function($resource) {

    return {

      save: function (sessionId, username, amount, moduleid, studentid, efftypeid, performancedate) {
        return $resource('http:/backend-dev.kevinott.de/api/modules', {}, {
          query: {
            method: 'POST',
            headers: {'x-session': sessionId, 'x-key': username},
            params: {
              amount: amount,
              moduleid: moduleid,
              studentid: studentid,
              efftypeid: efftypeid,
              performancedate: performancedate,
            },
            isArray: false
          }
        }).save();

      }
    }
  })


.factory('Modules' , function($resource) {

      return {

        query: function (sessionId, username) {
          return $resource('http:/backend-dev.kevinott.de/api/modules', {}, {
            query: {
              method: 'GET',
              headers: {'x-session': sessionId, 'x-key': username},
              isArray: false
            }
          }).query();

        }
      };
    })


