angular.module('app')

    .controller('settingsController', function ($scope, UserService, $location) {

        $scope.deleteAccount = function () {
          $rootScope.hide();

          UserService.deleteAccount().success(function(data){
            UserService.logOut().success(function(data){
              $location.path('/login');
            }).error(function(data){
              $rootScope.show("Logout failed! - Deletion was completed!");
            });
          }).error(function(data){
            $rootScope.hide();
            $rootScope.show("Server is not available - Deletion could not be completed!");
          });
        };

        $scope.save = function () {
          //check status of checkboxes
          //execute Service save()
        };

        $scope.gpsData = function () {
            //check status of checkbox
            //if checked
        };

        $scope.pushMessages = function () {
        }
    });
