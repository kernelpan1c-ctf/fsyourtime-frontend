/**
 * Created by justus on 06.10.15.
 */

angular.module('app')

  .factory('Efforts', function ($http, $resource) {
    return {
      save: function (sessionId, userid, amount, moduleid, studentid, efftypeid, performancedate) {
        var config = {headers: {'x-session': sessionId, 'x-key': userid}};
        return $http.post('http://backend-dev.kevinott.de/api/efforts', {
          amount: 5,//amount,
          moduleid: moduleid,
          studentid: studentid,
          efforttypeid: efftypeid,
          performancedate: performancedate
        }, config);
      },

      query: function (moduleid) {
        return $resource('http://backend-dev.kevinott.de/api/efforts/module/' + moduleid , {}, {
          query: {
            method: 'GET',
            headers: {'x-session': sessionStorage.mySessionId, 'x-key': sessionStorage.userid},
            isArray: true
          }
        }).query();
      },

      update: function (effortid, amount, efforttypeid) {
        return $resource('http://backend-dev.kevinott.de/api/efforts/' + effortid , {}, {
          query: {
            method: 'PUT',
            headers: {'x-session': sessionStorage.mySessionId, 'x-key': sessionStorage.userid},
            amount : amount,
            efforttypeid : efforttypeid,
            isArray: true
          }
        }).query();
      },
      getbyid: function (effortid) {
        return $resource('http://backend-dev.kevinott.de/api/efforts/' + effortid , {}, {
          query: {
            method: 'GET',
            headers: {'x-session': sessionStorage.mySessionId, 'x-key': sessionStorage.userid},
            isArray: true
          }
        }).query();
      }
    }
  })

  .factory('EffortTypes', function ($resource) {
    return {
      query: function () {
        return $resource('http://backend-dev.kevinott.de/api/efforttypes', {}, {
          query: {
            method: 'GET',
            headers: {'x-session': sessionStorage.mySessionId, 'x-key': sessionStorage.userid},
            isArray: true
          }
        }).query();
      }
    }
  })

  .factory('Modules', function ($resource) {
    return {
      query: function () {
        return $resource('http://backend-dev.kevinott.de/api/modules/student', {}, {
          query: {
            method: 'GET',
            headers: {'x-session': sessionStorage.mySessionId, 'x-key': sessionStorage.userid},
            isArray: true
          }
        }).query();
      }
    };
  });

