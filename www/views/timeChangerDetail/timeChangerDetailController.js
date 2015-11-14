/**
 * Created by justus on 06.10.15.
 */
angular.module('app',[], function($locationProvider){
  $locationProvider.html5Mode(true);
})

  .controller('timeChangerDetailController', function ($stateParams, Efforts, $scope, $cordovaDatePicker, $ionicPlatform)   {

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

    var effortid = $stateParams.effort._id;
    alert(effortid);


    $scope.efforts = Efforts.getbyid(effortid);


    $scope.save = function(){

    }

  });
