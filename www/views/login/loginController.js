angular.module('app')

  .controller('loginController', function ($scope, $location, UserService, $rootScope, $window) {

    $scope.login = function (username, password) {
      //$rootScope.show("Authenticating..");
      if(username == undefined || password  == undefined){
        alert("Please check your Username/Password");
      }else{

        UserService.signIn(username, password).success(function (data) {
          $window.sessionStorage.mySessionId = data.token;
          $window.sessionStorage.userid = data.userid;
          $window.sessionStorage.matricularnr = data.matricularnr;
          $window.sessionStorage.privacyFlag = data.privacyFlag;

          if (sessionStorage.privacyFlag == 'false') {
            $rootScope.hide();
            $location.path('/privacy');
          } else {
            //$rootScope.hide();
            $location.path('/app/timer');
          }
        }).error(function (status, data) {
          $rootScope.hide();
          $rootScope.notify(status);
          console.log(status);
          console.log(data);
        })
      };
    };
  });
