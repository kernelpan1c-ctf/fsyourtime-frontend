/**
 * Created by justus on 06.10.15.
 */
angular.module('app')

  .controller('timechangerController', function ($scope, $cordovaDatePicker, $ionicPlatform)   {

    //Picker only testable in emulator/on device
    $scope.showDatePicker = function() {

      minDate = ionic.Platform.isIOS() ? new Date() : (new Date()).valueOf();
      var options = {
        date: new Date(),
        mode: 'date', // or 'time'
        minDate: minDate,
        allowOldDates: true,
        allowFutureDates: false,
        doneButtonLabel: 'DONE',
        doneButtonColor: '#F2F3F4',
        cancelButtonLabel: 'CANCEL',
        cancelButtonColor: '#000000'
      };

      $ionicPlatform.ready(function() {
        $cordovaDatePicker.show(options).then(function(date){
          alert(date);
        });
      });
    };

    $scope.showStartTime = function(){
      var timeOptions = {
        date: new Date(),
        mode: 'time',
        doneButtonLabel: 'DONE',
        doneButtonColor: '#F2F3F4',
        cancelButtonLabel: 'CANCEL',
        cancelButtonColor: '#000000'
      };
      $ionicPlatform.ready(function() {
        $cordovaDatePicker.show(timeOptions).then(function(date){
          //alert(date);
        });
      });
    };

    $scope.showEndTime = function(){
      var timeOptions = {
        date: new Date(),
        mode: 'time',
        doneButtonLabel: 'DONE',
        doneButtonColor: '#F2F3F4',
        cancelButtonLabel: 'CANCEL',
        cancelButtonColor: '#000000'
      };
      $ionicPlatform.ready(function() {
        $cordovaDatePicker.show(timeOptions).then(function(date){
          //alert(date);
        });
      });
    };

    // Dropdown
    var coursearray = [
      {
        id: "1",
        name: localStorage.getItem('Class')
      },

    ];
    $scope.courses = coursearray;

    $scope.load = function() {
      var StartTime = localStorage.getItem('StartTime');
      var EndTime = localStorage.getItem('EndTime');
      var Date = localStorage.getItem('Date');
      element(by.model('StartTime')).value=StartTime;
      element(by.model('EndTime')).value=EndTime;
      element(by.model('Date')).value=Date;

    };

    $scope.save = function() {
      var StartTime = element(by.model('StartTime')).value;
      var EndTime = element(by.model('EndTime')).value;
      var Class = element(by.model('Class')).value;
      var Date = element(by.model('Date')).value;
      localStorage.setItem('StartTime', $scope.StartTime);
      localStorage.setItem('EndTime', $scope.EndTime);
      localStorage.setItem('Class', $scope.Class);
      localStorage.setItem('Date', $scope.Date);
    };

  });
