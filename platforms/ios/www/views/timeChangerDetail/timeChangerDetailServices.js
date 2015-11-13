/**
 * Created by Marcel on 12/11/15.
 */

angular.module('app')

  .factory('EffortsTC', function ($http, $resource) {
    return {
      save: function (sessionId, userid, amount, moduleid, studentid, efftypeid, performancedate) {
        var config = {headers: {'x-session': sessionId, 'x-key': userid}};
        return $http.put('http://backend-dev.kevinott.de/api/efforts', {
          amount: 5,//amount,
          moduleid: moduleid,
          studentid: studentid,
          efforttypeid: efftypeid,
          performancedate: performancedate
        }, config);

      }
    }
  })


  .factory('updateEfforts', function ($http, $window) {
    return {
      do: function (amount, moduleid, studentid, efftypeid, performancedate) {
        return $http.put('http://backend-dev.kevinott.de/api/efforts', {
          headers: {'x-session': $window.sessionStorage.token, 'x-key': $window.sessionStorage.userid},
          amount: amount,
          stundentid: $window.sessionStorage.matricularnr,
          efftypeid: efftypeid,
          performancedate: performancedate
        });
      }
    }
  });
