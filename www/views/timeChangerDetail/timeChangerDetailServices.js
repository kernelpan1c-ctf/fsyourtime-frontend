/**
 * Created by Marcel on 12/11/15.
 */

angular.module('app')

  //Service to share effort(s) between views
  .factory('EffortService', function ($q){
    return {
      efforts: [],
      getEfforts: function() {
        return this.efforts
      },
      getEffort: function(effortId) {
        var dfd = $q.defer();
        this.efforts.forEach(function(effort) {
          if (effort._id === effortId) dfd.resolve(effort)
        });
        return dfd.promise
      }
    }
  })

  .factory('EffortsTC', function ($http, $resource) {
    return {
      query: function (sessionId, userid, amount, moduleid, studentid, efftypeid, performancedate) {
        var config = {headers: {'x-session': sessionId, 'x-key': userid}};
        return $http.get('http://backend-dev.kevinott.de/api/efforts/' + effortid, {
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
