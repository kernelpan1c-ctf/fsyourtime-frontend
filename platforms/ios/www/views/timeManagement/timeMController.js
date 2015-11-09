/**
 * Created by justus on 06.10.15.
 */
angular.module('app')

  .controller('timeMController', function ($window, $scope, $cordovaDatePicker, $ionicPlatform, Modules, Efforts)   {

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

      // check startTime - endTime max 10h
      //$scope.startTime
      //$scope.endTime

      //Call API Service

    // Dropdown Hardcoded Data

    $scope.courses = Modules.query();

    $scope.efforts = Efforts.query();

    $scope.save = function(){
      $http.post('http://backend-dev.kevinott.de/api/efforts', {
        headers: {'x-session': $window.sessionStorage.token, 'x-key': $window.sessionStorage.userid}},
        amount = $scope.getDuration(startTime, endTime),
        moduleid = $scope.course.id,
        studentid = $window.sessionStorage.studentid,
        efftypeid = $scope.efforttype,
        performancedate= $scope.date
        //place = $scope.place,
        //material = $scope.marterial
      );
    }

    $scope.getDuration = function(start, end) {

        Difference = start.getTime() - end.getTime();
        //Days = Math.floor (a / (1000 * 60 * 60 * 24)),
        Hours = Math.floor (a / (1000 * 60 * 60)) % 24;
        //Minutes = Math.floor (a / (1000 * 60 )) % 60,
        return Hours;

    };

  });
