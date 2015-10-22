angular.module('app')

.factory('stepwatch', function (SW_DELAY, $timeout) {
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
      start();
    }, SW_DELAY);
  };

  var stop = function () {
    $timeout.cancel(stopwatch);
    stopwatch = null;
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

});
