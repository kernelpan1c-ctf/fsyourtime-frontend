/**
 * Created by justus on 06.10.15.
 */
angular.module('app')

  .controller('timeChangerController', function ($window, $scope, $cordovaDatePicker, $ionicPlatform)   {

    $scope.noEfforts = true;

    // Dropdown
    var effortarray = [
      {
        id: "1",
        name: localStorage.getItem('Class')
      }
    ];


  });
