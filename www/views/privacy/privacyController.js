angular.module('app')

    .controller('privacyController', function($scope, UserService, $location, $rootScope, $window){
    $scope.eror_message = '';

    $scope.privacy = function(){

      $rootScope.hide();
      //$rootScope.show("Authenticating..");
      //UserService.accept().success(function(data) {
      //  $location.path('/app/settings');
      //}).error(function(data){
      //  $rootScope.notify('Server unavailable');  //set privacy statement true failed
      //  $location.path('/login');

      //});
      $location.path('/app/timer');
    };

    $scope.decline = function() {
      $location.path('/login');
    };
    //TODO: Weiterleitung auf eine Fehler/Infoseite
    //$scope.decline = function(){
        //$location.path('/');

});
