/**
 * Created by justus on 06.10.15.
 */
angular.module('app')

<<<<<<< HEAD:platforms/ios/www/views/timeManagement/timeMController.js
  .controller('timeMController', function ($scope, $cordovaDatePicker, $ionicPlatform, $window)   {
=======
  .controller('timeMController', function ($scope, $cordovaDatePicker, $ionicPlatform)   {
>>>>>>> alpha:platforms/ios/www/views/timeManagement/timeMController.js

    //Picker only testable in emulator/on device
    $scope.showDatePicker = function() {

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

      $ionicPlatform.ready(function() {
        $cordovaDatePicker.show(options).then(function(date){
          $scope.date = date;
          //alert(date);
        });
      });
    };

    $scope.showStartTime = function(){
      var timeOptions = {
        date: new Date(),
        mode: 'time',
        doneButtonLabel: 'Select',
        doneButtonColor: '#000000',
        cancelButtonLabel: 'Cancel',
        cancelButtonColor: '#000000',
        minuteInterval: 5
      };
      $ionicPlatform.ready(function() {
        $cordovaDatePicker.show(timeOptions).then(function(date){
          $scope.startTime = date;
          //alert(date);
        });
      });
    };

    $scope.showEndTime = function(){
      var timeOptions = {
        date: new Date(),
        mode: 'time',
        doneButtonLabel: 'Select',
        doneButtonColor: '#000000',
        cancelButtonLabel: 'Cancel',
        cancelButtonColor: '#000000',
        minuteInterval: 5
      };
      $ionicPlatform.ready(function() {
        $cordovaDatePicker.show(timeOptions).then(function(date){
          $scope.endTime = date;
          //alert(date);
        });
      });
    };

    $scope.save = function(startTime,endTime, date){
      //Date can only be selected as required -2weeks until today
      //already ensured through UI restrictions -> datepicker
<<<<<<< HEAD:platforms/ios/www/views/timeManagement/timeMController.js
      // alert("test");
      alert(startTime);
      var effort ={};
      effort.StartTime=startTime;
      effort.EndTime=endTime;
      //effort.Date=date;
      $window.sessionStorage.StartTime = startTime;
      $window.sessionStorage.EndTime = endTime;
      //$window.sessionStorage.Class = Class;
      $window.sessionStorage.Date = date;
      //$window.sessionStorage.effort=effort;
      alert(effort.StartTime);
=======
      alert("test");
      var StartTime = element(by.model('StartTime')).value;
      var EndTime = element(by.model('EndTime')).value;
      var Class = element(by.model('Class')).value;
      var Date = element(by.model('Date')).value;
      localStorage.setItem('StartTime', $scope.StartTime);
      localStorage.setItem('EndTime', $scope.EndTime);
      localStorage.setItem('Class', $scope.Class);
      localStorage.setItem('Date', $scope.Date);
      alert("succeeded!");
>>>>>>> alpha:platforms/ios/www/views/timeManagement/timeMController.js
    };

      // check startTime - endTime max 10h
      //$scope.startTime
      //$scope.endTime

      //Call API Service

    // Dropdown Hardcoded Data
    var coursearray = [
      {
        id: "1",
        name: "Finance 1"
      },
      {
        id: "2",
        name: "Wirtschaftsprivatrecht"
      }
    ];
    var effortarray = [
      {
        id: "1",
        name: "Lesen"
      },
      {
        id: "2",
        name: "Übungen"
      }
    ];
    $scope.courses = coursearray;
    $scope.efforts = effortarray;
  });
