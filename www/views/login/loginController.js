angular.module('app')

  .controller('loginController', function ($scope, $location, UserService, $rootScope, $window) {


    $scope.signIn = function (username, password, syncdata) {

      $rootScope.show("Authenticating..");
      $window.sessionStorage.userID = username;

      if (!syncdata)syncdata = false;
      //alert(syncdata);

      UserService.signIn(username, password, syncdata).success(function (data) {

        $window.sessionStorage.mySessionId = data.mySessionId;
        $window.sessionStorage.userid = data.userid;
        $window.sessionStorage.matricularnr = data.matricularnr;
        $window.sessionStorage.privacy = data.privacy;


        //alert(sessionStorage.privacy);
        $rootScope.hide();
        if(sessionStorage.privacy === 'false') {  //Check if privacy was accepted == true
          $rootScope.hide();
          $location.path('/app/timerViewTEST');
        }else{
          $rootScope.hide();
          $location.path('/app/timer');
        }
      }).error(function (status, data) {
        // $rootScope.hide();
        $rootScope.notify('Invalid Credentials');

        console.log(status);
        console.log(data);

      });
    };
  });
