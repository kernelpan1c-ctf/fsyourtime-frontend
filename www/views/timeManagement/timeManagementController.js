/**
 * Created by justus on 06.10.15.
 */
angular.module('app')

  .controller('timeManagementController', function ($rootScope, $filter, $http, $scope, $cordovaDatePicker,
                                                    $ionicPlatform, Efforts, Modules, EffortTypes) {

    $scope.select = {};
    $scope.efforts = EffortTypes.query();
    $scope.modules = Modules.query();

    //Picker only testable in emulator/on device
    $scope.showstartDatePicker = function () {

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
          $scope.startDate = date;
          //$scope.endDate = date;
        });
      });
    };

    $scope.showendDatePicker = function () {

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
          $scope.endDate = date;
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


    function getDuration(starttime, startdate, endtime, enddate) {
      eh= endtime.getHours();
      em=endtime.getMinutes();
      enddate.setHours(eh);
      enddate.setMinutes(em);
      sh=starttime.getHours();
      sm=starttime.getMinutes();
      startdate.setHours(sh);
      startdate.setMinutes(sm);
      var timeDiff = (enddate.getTime() - startdate.getTime());
      var diffMins = Math.ceil(timeDiff / (1000 * 60));
      //alert(diffMins);
      return (diffMins);
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
      var amount = getDuration($scope.startTime, $scope.startDate, $scope.endTime, $scope.endDate);
      if (amount <= 0){ $rootScope.notify('Please check submitted data')} else{
      var date = $scope.startDate;
      if (amount <= 600) {
        Efforts.save(sessionStorage.mySessionId, sessionStorage.userid, amount,
          $scope.select.module, sessionStorage.matricularnr, $scope.select.effort, date).success(function (status, data) {
            $rootScope.notify('Effort succesfully submitted');
          }).error(function (status, data) {
            console.log(status);
            console.log(data);
          });
      } else {
        $rootScope.notify('Maximum 10h per booking');
      }}
    }
  });
