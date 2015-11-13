/**
 * Created by justus on 06.10.15.
 */
angular.module('app')

  .controller('timeChangerController', function (Modules, Efforts, $window, $scope)   {

    $scope.select = {};
    if (!$scope.efforts) {$scope.noEfforts = true;} else $scope.noEfforts = false;

    $scope.modules = Modules.query();

    $scope.effortquery = function (moduleid) {
      $scope.efforts = Efforts.query(moduleid);
      if ($scope.efforts) $scope.noEfforts=false;
    };
  });
