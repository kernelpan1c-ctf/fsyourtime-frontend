angular.module('app')

    .controller('loginController', function ($scope, $location, UserService, $rootScope, $window) {

          $scope.signIn = function signIn(username, password) {

              $rootScope.show("Authenticating..");
              UserService.signIn(username, password).success(function (data) {

                $window.sessionStorage.token = data.id;


                $rootScope.hide();
                $location.path('/privacy');

              }).error(function (status, data) {
                $rootScope.hide();
                $rootScope.notify('Invalid Credentials');

                console.log(status);
                console.log(data);

              });
          };
    });
