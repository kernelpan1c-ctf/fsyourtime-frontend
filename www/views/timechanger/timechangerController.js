/**
 * Created by justus on 06.10.15.
 */
angular.module('app')

  .controller('timeChangerController', function (Modules, Efforts, $window, $scope, $cordovaDatePicker, $ionicPlatform)   {



    // Dropdown



    $scope.modules = Modules.query();

    $scope.efforts = Efforts.query();

    if ($scope.efforts == "") {$scope.noEfforts = true;} else $scope.noEfforts = false;

    alert($scope.efforts)
  });
