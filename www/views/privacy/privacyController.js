angular.module('app')

  .controller('privacyController', function ($scope, PrivacyService, $location, $rootScope) {
    $scope.privacy = function () {
      PrivacyService.acceptPrivacy(sessionStorage.mySessionId, sessionStorage.userid).success(function () {
        $rootScope.hide();
        $location.path('/app/timer');
      }).error(function (data) {
        //set privacy = true failed
        PrivacyService.logOut(sessionStorage.mySessionId).success(function (data) {
          $rootScope.hide();
          $location.path('/login');
        }).error(function (data) {
          $rootScope.notify(data);
        });
      });
    };

    $scope.decline = function () {
      $rootScope.hide();
      PrivacyService.logOut(sessionStorage.mySessionId).success(function (data) {
        $rootScope.hide();
        $location.path('/login');
      }).error(function (data) {
        $rootScope.notify(data);
      });
    };
  });
