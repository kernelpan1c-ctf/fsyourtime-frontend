angular.module('app')

  .controller('menuController', function ($scope, PrivacyService, $location) {
    $scope.logout = function () {
      PrivacyService.logOut(sessionStorage.mySessionId).success(function () {
        sessionStorage.clear();
        $location.path('/login');
      }).error(function (data) {
        $rootScope.notify(data);
        sessionStorage.clear();
        $location.path('/login');
      });
    };
  });
