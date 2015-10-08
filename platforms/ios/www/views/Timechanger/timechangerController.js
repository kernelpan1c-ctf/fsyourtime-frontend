/**
 * Created by justus on 06.10.15.
 */
angular.module('app')

  .controller('timeChangerController', function ($scope, $cordovaDatePicker, $ionicPlatform)   {

    $scope.noEfforts = true;

    // Dropdown
    var coursearray = [
      {
        id: "1",
        name: localStorage.getItem('Class')
      }
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
