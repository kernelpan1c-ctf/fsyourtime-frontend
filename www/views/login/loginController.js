angular.module('app')

    .controller('loginController', function ($scope, $location) {
        $scope.signIn = function (username, password) {
            //placeholder: check if MN and password are correct ==true
            if (username == password) {
                //placeholder: check if privacy policy has been accepted == false
                if (1 == 1) {
                    $location.path('/privacy');
                } else {
                    //placeholder: redirect to first page when logged in
                    $location.path('/main');
                }
            } else {
                $scope.error_message = 'login failed for ' + username;
            }
        };
    });
