angular.module('app')

    .controller('settingsController', function ($scope, UserService, $location) {

        $scope.deleteAccount = function () {
          $rootScope.hide();

          UserService.deleteAccount().success(function(){
            UserService.logOut().success(function(){
              $location.path('/login');
            }).error(function(status, data){
              $rootScope.show(status);
            });
          }).error(function(status, data){
            $rootScope.hide();
            $rootScope.show(status);
            console.log(status);
            console.log(data);
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
