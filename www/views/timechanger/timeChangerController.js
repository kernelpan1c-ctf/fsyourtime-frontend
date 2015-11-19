/**
 * Created by justus on 06.10.15.
 */
angular.module('app')

  .controller('timeChangerController', function ($http, Modules, Efforts, $window, $scope, EffortService, $ionicHistory)   {

    $scope.totalamount = 0;
    $scope.shouldShowDelete = false;
    $scope.listCanSwipe = true
    $scope.select = {};
    $scope.doRefresh = function() {
      $http.get('/#/app/timeChanger').finally(function () {
        // Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');
      });
    };


    $scope.getTotal = function(efforts){
      var totalamount = 0;
      efforts.forEach(function (effort) {
        totalamount = totalamount + effort.amount;
      });
      return $scope.efforts.totalamount = totalamount;
    };

    if (!$scope.efforts) {$scope.noEfforts = true;} else $scope.noEfforts = false;

    $scope.modules = Modules.query();

    $scope.goBack = function(){
      $ionicHistory.goBack();
    };

    $scope.effortquery = function (moduleid) {
      $scope.efforts = Efforts.query(moduleid);
      var totalamount = 0;
        totalamount = totalamount + effort.amount;
      return $scope.efforts.totalamount = totalamount;
      if ($scope.efforts) $scope.noEfforts=false;
      if (!$scope.noEfforts) {
        EffortService.efforts = $scope.efforts;
      }
    };

    $scope.removeItem = function(index){
      $scope.efforts.splice(index, 1);
      Efforts.delete($scope.efforts[index]._id);
    };

  });
