/**
 * Created by justus on 06.10.15.
 */
angular.module('app')

  .controller('timeChangerController', function ($timeout, $rootScope, $http, Modules, Efforts, $window, $scope, EffortService, $ionicHistory) {

    $scope.totalamount = 0;
    $scope.hide = true;
    $scope.shouldShowDelete = false;
    $scope.listCanSwipe = true;
    $scope.select = {};
    $scope.modules = Modules.query();
    $scope.noEfforts = (!$scope.efforts);

    $scope.doRefresh = function () {
      $scope.effortquery($scope.select.module);
      $scope.$broadcast('scroll.refreshComplete');
    };

    $scope.getTotal = function (efforts) {
      var totalamount = 0;
      efforts.forEach(function (effort) {
        totalamount = totalamount + effort.amount;
      });
      $scope.efforts.totalamount = totalamount;
      $scope.hide = false;
    };

    $scope.goBack = function () {
      $ionicHistory.goBack();
    };

    $scope.effortquery = function (moduleid) {
      $scope.efforts = Efforts.query(moduleid);
      if ($scope.efforts) $scope.noEfforts = false;
      if (!$scope.noEfforts) {
        EffortService.efforts = $scope.efforts;
      }
      $timeout(function () {
        $scope.getTotal($scope.efforts)
      }, 350);
      //.success(function(){$scope.getTotal($scope.efforts)
    };

    $scope.removeItem = function (effort) {
      var idx = $scope.efforts.indexOf(effort);
      var efft = $scope.efforts[idx];
      $scope.efforts.splice(idx, 1);
      Efforts.delete(efft._id);
      $scope.getTotal($scope.efforts);
    }

  });
