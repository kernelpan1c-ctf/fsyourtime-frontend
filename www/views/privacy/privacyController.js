angular.module('app')

    .controller('privacyController', function($scope, UserService, $location){
    $scope.eror_message = '';

    $scope.privacy = function(){
      $rootScope.hide();
      $rootScope.show("Authenticating..");
      UserService.accept();
      $location.path('/app/settings');
    };

    $scope.decline = function() {
      $rootScope.hide();
      UserService.decline();
    };
    //TODO: Weiterleitung auf eine Fehler/Infoseite
    //$scope.decline = function(){
        //$location.path('/');
    };
});
