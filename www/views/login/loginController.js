angular.module('app')

  .controller('loginController', function ($scope, $location, UserService, $rootScope, $window) {

    $scope.signIn = function (username, password, syncdata) {   //function executed by button Login in View

      $rootScope.show("Authenticating..");

      // syncdata checkbox = undefined workaround
      if (syncdata)syncdata = false;

      UserService.signIn(username, password, syncdata).success(function (data) {    //executes service signIn in loginService
        $window.sessionStorage.mySessionId = data.mySessionId;    //store returning data from function signIn in sessionStorage
        $window.sessionStorage.userid = data.userid;
        $window.sessionStorage.matricularnr = data.matricularnr;
        $window.sessionStorage.privacy = data.privacy;

        if(sessionStorage.privacy == 'false') {   //check if user accepted privacy == true
          $rootScope.hide();
          $location.path('/privacy');
        }else{    //privacy == false
          $rootScope.hide();
          $location.path('/app/timer');
        }
      }).error(function (status, data) {    //in case of error from service loginService
        $rootScope.hide();
        $rootScope.notify(status);

        console.log(status);
        console.log(data);
      });
    };
  });
