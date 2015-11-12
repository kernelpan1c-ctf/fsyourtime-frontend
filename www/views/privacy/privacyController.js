angular.module('app')

    .controller('privacyController', function($scope, UserService2, $location, $rootScope, $window){
    $scope.eror_message = '';

    $scope.privacy = function(){

      $rootScope.hide();
      $rootScope.show("Authenticating..");
      UserService2.acceptPrivacy(sessionStorage.mySessionId, sessionStorage.userid).success(function(data) {
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
      UserService2.logOut(sessionStorage.mySessionId).success(function(data) {
        $rootScope.hide();
       $location.path('/login');

      }).error(function(data) {
        //alert('Fehler!');

      });
      $location.path('/app/timeManagmentTEST');

    };
    //TODO: Weiterleitung auf eine Fehler/Infoseite
    //$scope.decline = function(){
        //$location.path('/');


});
