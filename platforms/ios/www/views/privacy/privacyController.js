angular.module('app')

    .controller('privacyController', function($scope, $location, $state){
    $scope.eror_message = '';

    $scope.privacy = function(){
       // $location.path('/app/timer');
      $state.go('app.timer');
    };
    //TODO: Weiterleitung auf eine Fehler/Infoseite
    $scope.decline = function(){
        $location.path('/login');
    };
});
