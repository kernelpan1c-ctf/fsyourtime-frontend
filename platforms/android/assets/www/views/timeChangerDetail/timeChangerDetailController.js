/**
 * Created by justus on 06.10.15.
 */
angular.module('app')

  .controller('timeChangerDetailController', function ($rootScope, $location, $window,$ionicHistory, EffortTypes, $stateParams, Efforts, $scope, $cordovaDatePicker, $ionicPlatform, effort) {

    $scope.select = {};
    $scope.userseffort = effort;
    $scope.efforts = EffortTypes.query();
    $scope.efforttype = $scope.userseffort.type.name;
    $scope.save = function (hours, minutes) {
      var hours = hours * 60;
      if (!minutes) {
        var amount= hours;
      } else if (!hours){ var amount = minutes} else {var amount = parseInt(hours) + parseInt(minutes)}
      if (minutes > 59) $rootScope.notify("Please check submitted minutes"); else {
        if (amount > 600){$rootScope.notify("Max 10h allowed")}else{
          Efforts.update($stateParams.id, amount, $scope.efforttype._id, $scope.userseffort.performancedate).success(function () {
            $rootScope.notify("Effort successfully updated");
            $ionicHistory.goBack();
          })}
        //else $rootScope.notify("Maximum 10h allowed")
      }};

    //Picker only testable in emulator/on device
    $scope.showDatePicker = function () {

      //minDate = ionic.Platform.isIOS() ? new Date() : (new Date()).valueOf();
      var options = {
        date: $scope.userseffort.performancedate,
        mode: 'date', // or 'time'
        minDate: minDate,
        allowOldDates: true,
        allowFutureDates: false,
        doneButtonLabel: 'DONE',
        doneButtonColor: '#F2F3F4',
        cancelButtonLabel: 'CANCEL',
        cancelButtonColor: '#000000'
      };

      $ionicPlatform.ready(function () {
        $cordovaDatePicker.show(options).then(function (date) {
          $scope.date = date;
        });
      });
    };
  })

  .filter('time', function () {

    var conversions = {
      'ss': angular.identity,
      'mm': function (value) {
        return value * 60;
      },
      'hh': function (value) {
        return value * 3600;
      }
    };

    var padding = function (value, length) {
      var zeroes = length - ('' + (value)).length,
        pad = '';
      while (zeroes-- > 0) pad += '0';
      return pad + value;
    };

    return function (value, unit, format, isPadded) {
      var totalSeconds = conversions[unit || 'ss'](value),
        hh = Math.floor(totalSeconds / 3600),
        mm = Math.floor((totalSeconds % 3600) / 60),
        ss = totalSeconds % 60,
        hours = (hh != 1) ? 's' : '',
        mins = (mm != 1) ? 's' : '',
        secs = (ss != 1) ? 's' : '';

      format = format || 'hh:mm:ss';
      isPadded = angular.isDefined(isPadded) ? isPadded : true;
      hh = isPadded ? padding(hh, 2) : hh;
      mm = isPadded ? padding(mm, 2) : mm;
      ss = isPadded ? padding(ss, 2) : ss;

      return format.replace(/hh/, hh).replace(/mm/, mm).replace(/ss/, ss)
        .replace(/our\(s\)/, 'our' + hours).replace(/inute\(s\)/, 'inute' + mins).replace(/econd\(s\)/, 'econd' + secs);
    }
  });
