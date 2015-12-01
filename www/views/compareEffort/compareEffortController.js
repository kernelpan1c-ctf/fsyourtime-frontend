/**
 * Created by Chris on 30.11.15.
 */
angular.module('app')

  .controller('compareEffortController', function ($ionicPopup, $timeout, $rootScope, $http, Modules, Efforts, $window, $scope, compareServices, $ionicHistory) {

    $scope.totalamount = 0;
    $scope.topthreeamount = 0;
    $scope.bottomthreeamount = 0;

    $scope.select = {};
    $scope.modules = Modules.query();
    $scope.noEfforts = true;
    $scope.hideBar = true;

    $scope.doRefresh = function () {
      $scope.effortcomparison($scope.select.module);
      $scope.$broadcast('scroll.refreshComplete');
    };

    $scope.goBack = function () {
      $ionicHistory.goBack();
    };

    $scope.getTotal = function (efforts) {
      var totalamount = 0;
      efforts.forEach(function (effort) {
        totalamount = totalamount + effort.amount;
      });
      $scope.efforts.totalamount = totalamount;
      if (totalamount >0) {
        $scope.hideBar = false;} else{
        $scope.noEfforts = true;
        $scope.hideBar = true;}
    };


    $scope.effortcomparison = function (moduleid) {
      $scope.efforts = Efforts.query(moduleid);
      if ($scope.efforts) $scope.noEfforts = false;
      if (!$scope.noEfforts) {
        //EffortService.efforts = $scope.efforts;
      }
      $timeout(function () {
        $scope.getTotal($scope.efforts)
      }, 500);

      $scope.comparisonarray = compareServices.doComparison(moduleid);
      $timeout(function () {
        //alert($scope.comparisonarray.topthree[0].sum);
        //$scope.getTotal($scope.comparisonarray)
      }, 500);








      //.success(function(){$scope.getTotal($scope.efforts)
    };
  });
