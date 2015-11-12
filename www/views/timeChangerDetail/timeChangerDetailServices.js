/**
 * Created by Marcel on 12/11/15.
 */

angular.module('app')

.factory('updateEfforts', function($http, $window) {
  return {
    do : function(amount, moduleid, studentid, efftypeid, performancedate) {
      return $http.put('http://backend-dev.kevinott.de/api/efforts', {
        headers: {'x-session': $window.sessionStorage.token, 'x-key': $window.sessionStorage.userid},
        amount: amount,
        stundentid: $window.sessionStorage.matricularnr,
        efftypeid: efftypeid,
        performancedate: performancedate
      });
    } }})
