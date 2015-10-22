/**
 * Created by justus on 06.10.15.
 */
angular.module('app')

  .controller('timeMController', function ($scope, $cordovaDatePicker, $ionicPlatform, Modules, Efforts)   {

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

    $scope.save = function(){
      //Date can only be selected as required -2weeks until today
      //already ensured through UI restrictions -> datepicker
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
    };

      // check startTime - endTime max 10h
      //$scope.startTime
      //$scope.endTime

      //Call API Service

    // Dropdown Hardcoded Data

    $scope.courses = Modules.query();

    $scope.efforts = Efforts.query();

  });
