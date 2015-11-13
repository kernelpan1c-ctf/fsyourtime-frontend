/**
 * Created by justus on 06.10.15.
 */
angular.module('app')

  .controller('timeManagementController', function ($filter, $http, $window, $scope, $cordovaDatePicker,
                                                    $ionicPlatform, Efforts, Modules, EffortTypes) {

    $scope.select = {};

    /*
    $scope.efforts = [
      {
        id: "56257c4c1f7b6687091d2c06",
        name: "Pruefungsvorbereitung"
      },
      {
        id: null,
        name: "Assignment"
      },
      {
        id: "3",
        name: "Vorbereitung Präsentation"
      }
    ];*/

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
          //alert(date);
        });
      });
    };

    $scope.showStartTime = function () {
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
          $scope.startTime = date;
          //alert(date);
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
          //alert(date);
        });
      });
    };

    // check startTime - endTime max 10h
    //$scope.startTime
    //$scope.endTime

    //Call API Service

    // Dropdown Hardcoded Data
    $scope.getDuration = function (start, end) {
      //start=Date.parse(start)
      //end=Date.parse(end)
      Difference = start - end;
      //Days = Math.floor (Difference / (1000*60*60*24));
      Hours = Math.floor(Difference / (1000 * 60 * 60)) % 24;
      // Minutes = Math.floor ( Difference / (1000*60)) % 60;
      return Hours;
    };


    var amount = $scope.getDuration($scope.startTime, $scope.endTime);


    $scope.save = function () {
      //alert("module: " + $scope.select.module);
      //alert("effort: " + $scope.select.effort);
      Efforts.save(sessionStorage.mySessionId, sessionStorage.userid, amount,
        $scope.select.module, sessionStorage.matricularnr, $scope.select.effort, $scope.date).error(function (status, data) {
          console.log(status);
          console.log(data);
        });
    };

    //  $scope.save = function () {
    //    $http.post('http://backend-dev.kevinott.de/api/efforts', {
    //      headers: {'x-session': $window.sessionStorage.mySessionId, 'x-key': $window.sessionStorage.userid},
    //     amount : $scope.getDuration($scope.startTime, $scope.endTime),
    //      moduleid : $scope.modules.id,
    //      studentid : $window.sessionStorage.matricularnr,
    //      efftypeid : $scope.efforts.id,
    //      performancedate : $scope.date,
    //place : $scope.place
    //material: $scope.material
    //    })
    //  }


    //$scope.efforts = Efforts.query();

  });
