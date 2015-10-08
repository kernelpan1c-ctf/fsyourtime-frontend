angular.module('app')

    .controller('loginController', function ($scope, $location, UserService, $rootScope, $window) {

          $scope.signIn = function signIn(username, password) {

              $rootScope.show("Authenticating..");

            // Test user to bypass real API Login
            if (username == "user" && password == null){
              $rootScope.hide();
              $location.path('/privacy');
            }
            else{

              UserService.signIn(username, password).success(function (data) {

                $window.sessionStorage.token = data.jsessionid;
                //$window.sessionStorage.userid = data.userid;

                $rootScope.hide();

                //Check users privacy flag if not yet set
                $location.path('/privacy');
                //If privacy flag is set
                //$location.path('/app/timer');

              }).error(function (status, data) {
                $rootScope.hide();
                $rootScope.notify('Invalid Credentials');

                console.log(status);
                console.log(data);

              });

            }

          };
    });
