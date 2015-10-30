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
    var submit = function () {
      submit()
      data.seconds = 0
      Efforts.save(data);
    };
  return {
    data: data,
    start: start,
    stop: stop,
    reset: reset
  };

})

.factory('Efforts' , function($resource){
    return $resource('http://10.9.11.133:3000/api/efforts');
  })

  .factory('Modules' , function($resource){
    return $resource('http://10.9.11.133:3000/api/modules');
  });

