angular.module('app')

  .controller('privacyController', function ($scope, PrivacyService, $location, $rootScope) {
    $scope.privacy = function () {    //function executed by button privacy in View
      PrivacyService.acceptPrivacy(sessionStorage.mySessionId, sessionStorage.userid).success(function () {   //executes service acceptPrivacy in privacyService
        $rootScope.hide();
        sessionStorage.privacyFlag = true;
        $location.path('/app/timer');
      }).error(function (data) {
        //set privacy = true failed
        PrivacyService.logOut(sessionStorage.mySessionId).success(function (data) {   //executes service logOut in privacyService
          $rootScope.hide();
          $location.path('/login');
        }).error(function (data) {
          $rootScope.notify(data);
        });
      });
    };

    $scope.decline = function () {    //function executed by button decline in View
      $rootScope.hide();
      PrivacyService.logOut(sessionStorage.mySessionId).success(function (data) {   //executes service logOut in privacyService
        $rootScope.hide();
        $location.path('/login');
      }).error(function (data) {
        $rootScope.notify(data);
      });
    };
  });
