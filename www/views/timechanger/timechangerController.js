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


  });
