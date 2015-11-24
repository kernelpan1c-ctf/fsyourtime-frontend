/**
 * Created by justus on 06.10.15.
 */
angular.module('app')

  .controller('timeChangerController', function ($http, Modules, Efforts, $window, $scope, EffortService, $ionicHistory) {

    $scope.select = {};
    $scope.shouldShowDelete = false;
    $scope.listCanSwipe = true;
    $scope.noEfforts = (!$scope.efforts);
    $scope.modules = Modules.query();

    $scope.doRefresh = function () {
      $http.get('/#/app/timeChanger').finally(function () {
        // Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');
      });
    };

    $scope.effortquery = function (moduleid) {
      $scope.efforts = Efforts.query(moduleid);
      if ($scope.efforts) {
        $scope.noEfforts = false;
        EffortService.efforts = $scope.efforts;
      }
    };

    $scope.removeItem = function (index) {
      $scope.efforts.splice(index, 1);
      Efforts.delete($scope.efforts[index]._id);
    };
  });
