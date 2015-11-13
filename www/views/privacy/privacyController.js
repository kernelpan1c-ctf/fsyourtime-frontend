angular.module('app')

    .controller('privacyController', function($scope, PrivacyService, $location, $rootScope){
    $scope.privacy = function(){
      $rootScope.show("Authenticating..");
      PrivacyService.acceptPrivacy(sessionStorage.mySessionId, sessionStorage.userid).success(function() {
        $rootScope.hide();
        $location.path('/app/settings');
      }).error(function(data){
        //set privacy = true failed
        $rootScope.notify(data);
        $location.path('/login');
      });
    };

    $scope.decline = function() {
      $rootScope.hide();
      PrivacyService.logOut(sessionStorage.mySessionId).success(function(data) {
       $rootScope.hide();
       $location.path('/login');
      }).error(function(data) {
        $rootScope.notify(data);
      });
      $location.path('/app/timeManagmentTEST');
    };
});
