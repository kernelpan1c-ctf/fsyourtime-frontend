/**
 * Created by justus on 06.10.15.
 */
angular.module('app')

  .controller('timeChangerController', function ($ionicPopup, $timeout, $rootScope, $http, Modules, Efforts, $window, $scope, EffortService, $ionicHistory) {

    $scope.totalamount = 0;
    $scope.shouldShowDelete = false;
    $scope.listCanSwipe = true;
    $scope.select = {};
    $scope.modules = Modules.query();
    $scope.noEfforts = true;
    $scope.hideBar = true;

    var today = new Date();

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
      if (totalamount >0) {
        $scope.hideBar = false;} else{
        $scope.noEfforts = true;
      $scope.hideBar = true;}
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
      }, 500);
      //.success(function(){$scope.getTotal($scope.efforts)
    };


    $scope.removeItem = function (effort) {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Delete Effort',
        template: 'Are you sure you want to delete this effort?'});
      confirmPopup.then(function (res) {
        if (res) {
          var idx = $scope.efforts.indexOf(effort);
          var efft = $scope.efforts[idx];
          $scope.efforts.splice(idx, 1);
          Efforts.delete(efft._id).success(function () {
            $rootScope.notify('Effort successfully deleted')
          });
          $scope.getTotal($scope.efforts)
        }
      })
    }});
