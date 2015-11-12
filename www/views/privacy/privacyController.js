angular.module('app')

    .controller('privacyController', function($scope, UserService, $location, $rootScope, $window){
    $scope.eror_message = '';

    $scope.privacy = function(){

      $rootScope.hide();
      $rootScope.show("Authenticating..");
      UserService.acceptPrivacy(sessionStorage.mySessionId, sessionStorage.userid).success(function(data) {
        $location.path('/app/settings');
      }).error(function(data){
        $rootScope.notify('Server unavailable');  //set privacy statement true failed
        $location.path('/login');

      });
      //$location.path('/app/timer');
    };

    $scope.decline = function() {

      $rootScope.hide();
      //alert(sessionStorage.mySessionId);
      UserService.logOut(sessionStorage.mySessionId).success(function(data) {
        alert('Fehler success');

      }).error(function(data) {
        alert('Fehler error');

      });

    };
    //TODO: Weiterleitung auf eine Fehler/Infoseite
    //$scope.decline = function(){
        //$location.path('/');


});
