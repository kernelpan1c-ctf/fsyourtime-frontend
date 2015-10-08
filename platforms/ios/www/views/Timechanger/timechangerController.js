/**
 * Created by justus on 06.10.15.
 */
angular.module('app')

<<<<<<< HEAD
  .controller('timechangerController', function ($scope, $cordovaDatePicker, $ionicPlatform, $window)   {
=======
  .controller('timeChangerController', function ($scope, $cordovaDatePicker, $ionicPlatform)   {
>>>>>>> alpha

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

      var StartTime = $window.sessionStorage.StartTime;
      var EndTime = $window.sessionStorage.EndTime;
      var Date = $window.sessionStorage.Date;
    alert(StartTime)

    };

  });
