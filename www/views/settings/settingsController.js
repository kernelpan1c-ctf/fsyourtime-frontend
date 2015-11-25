angular.module('app')

    .controller('settingsController', function ($scope, SettingsService, $location, $rootScope) {

        $scope.deleteAccount = function () {
          $rootScope.hide();

          SettingsService.deleteAccount(sessionStorage.mySessionId, sessionStorage.userid).success(function(){
            SettingsService.logOut(sessionStorage.mySessionId).success(function(){
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
