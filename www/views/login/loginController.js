angular.module('app')

    .controller('loginController', function ($scope, $location, UserService, $rootScope, $window) {


          $scope.signIn = function (username, password, syncdata) {

            $rootScope.show("Authenticating..");
            $window.sessionStorage.userID = username;

            //alert(sessionStorage.userID);


            if (!syncdata)syncdata = false;
            //alert(syncdata);

              UserService.signIn(username, password, syncdata).success(function (data) {

                alert("Data Privacy = " + data.privacy);

                $window.sessionStorage.token = data.id;
                $window.sessionStorage.privacy = data.privacy;
                //alert(id);
                //$window.sessionStorage.token = data.privacyCheck;         //submits if user accepted privacy (true/false)
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
