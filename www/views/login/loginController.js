angular.module('app')

    .controller('loginController', function ($scope, $location, UserService, $rootScope, $window) {


          $scope.signIn = function (username, password, syncdata) {

            $rootScope.show("Authenticating..");
            $window.sessionStorage.userID = username;

            //alert(sessionStorage.userID);


            if (!syncdata)syncdata = false;
            //alert(syncdata);

              UserService.signIn(username, password, syncdata).success(function (data) {
                //alert(data.id);
                //alert("Data Privacy = " + data.privacy);

                $window.sessionStorage.mySessionId = data.mySessionId;
                $window.sessionStorage.userid = data.userid;
                $window.sessionStorage.matricularnr = data.matricularnr;
                $window.sessionStorage.privacy = data.privacy;

                alert(sessionStorage.privacy);

                $rootScope.hide();
                  if(data.privacy = 'false') {  //Check if privacy was accepted == true
                    $location.path('/privacy');
                  }else{
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
