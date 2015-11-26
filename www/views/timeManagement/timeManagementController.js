/**
 * Created by justus on 06.10.15.
 */
angular.module('app')

  .controller('timeManagementController', function ($filter, $http, $window, $scope, $cordovaDatePicker,
                                                    $ionicPlatform, Efforts, Modules, EffortTypes, $rootScope) {

    $scope.select = {};
    $scope.efforts = EffortTypes.query();
    $scope.modules = Modules.query();

    //Picker only testable in emulator/on device
    $scope.showDatePicker = function () {

      // minDate = ionic.Platform.isIOS() ? new Date() : (new Date()).valueOf();
      var options = {
        date: new Date(),
        mode: 'date', // or 'time'
        allowOldDates: true,
        allowFutureDates: false,
        minDate: new Date(+new Date - 12096e5),
        doneButtonLabel: 'Select',
        doneButtonColor: '#000000',
        cancelButtonLabel: 'Cancel',
        cancelButtonColor: '#000000'
      };

      $ionicPlatform.ready(function () {
        $cordovaDatePicker.show(options).then(function (date) {
          $scope.date = date;
        });
      });
    };

    $scope.showStartTime = function () {
      var timeOptions = {
        date: new Date(),//$scope.date,
        mode: 'time',
        doneButtonLabel: 'Select',
        doneButtonColor: '#000000',
        cancelButtonLabel: 'Cancel',
        cancelButtonColor: '#000000',
        minuteInterval: 5
      };
      $ionicPlatform.ready(function () {
        $cordovaDatePicker.show(timeOptions).then(function (date) {
          $scope.startTime = date;
        });
      });
    };

    $scope.showEndTime = function () {
      var timeOptions = {
        date: new Date(),
        mode: 'time',
        doneButtonLabel: 'Select',
        doneButtonColor: '#000000',
        cancelButtonLabel: 'Cancel',
        cancelButtonColor: '#000000',
        minuteInterval: 5
      };
      $ionicPlatform.ready(function () {
        $cordovaDatePicker.show(timeOptions).then(function (date) {
          $scope.endTime = date;
        });
      });
    };


    function getDuration(start, end) {
      start.getTime();
      end.getTime();
      var Difference = end - start;
      //Minutes
      return Math.floor(Difference / (1000 * 60));
    }

    function transformDate(date) {
      var dd = date.getDate();
      var mm = date.getMonth() + 1;//January is 0!
      var yyyy = date.getFullYear();

      if (dd < 10) {
        dd = '0' + dd
      }
      if (mm < 10) {
        mm = '0' + mm
      }

      date = yyyy + '-' + mm + '-' + dd;
      return date;
    }

    $scope.save = function () {
      var amount = getDuration($scope.startTime, $scope.endTime);
      var today = transformDate(new Date());

      if (amount <= 600) {
        Efforts.save(sessionStorage.mySessionId, sessionStorage.userid, amount,
          $scope.select.module, sessionStorage.matricularnr, $scope.select.effort, today).success(function (status, data) {
            //$rootScope.notify(status);
            $scope.select.module = null;
            $scope.select.effort = null;
          }).error(function (status, data) {
            console.log(status);
            console.log(data);
          });
      } else {
        $rootScope.notify('Maximum 10h per booking');
      }
    }
  });
