/**
 * Created by justus on 06.10.15.
 */

angular.module('app')

  .factory('Efforts', function($http) {
    return {
      save: function (sessionId, userid, amount, moduleid, studentid, efftypeid, performancedate) {
        var config = { headers: {'x-session': sessionId, 'x-key': userid}};
        return $http.post('http://backend-dev.kevinott.de/api/efforts', {
          amount: 5,//amount,
          moduleid: moduleid,
          studentid: studentid,
          efforttypeid: efftypeid,
          performancedate: performancedate
        }, config);
      }
    }
  })
/*
  .factory('Efforts' , function($resource) {

    return {

      save: function (sessionId, userid, amount, moduleid, studentid, efftypeid, performancedate) {
        return $resource('http://backend-dev.kevinott.de/api/efforts', {}, {
          query: {
            method: 'POST',
            headers: {'x-session': sessionId, 'x-key': userid},
            params: {
              amount: amount,
              moduleid: moduleid,
              studentid: studentid,
              efftypeid: efftypeid,
              performancedate: performancedate
            },
            isArray: false
          }
        }).save();

      },

      query: function ($http, $window) {
        return $resource('http://backend-dev.kevinott.de/api/efforts/student', {}, {
          query: {
            method: 'GET',
            headers: {'x-session': sessionStorage.mySessionId, 'x-key': sessionStorage.userid},
            isArray: true
          }
        }).query();

      }
    }
  })
*/

  .factory('Modules' , function($resource) {

    return {

      query: function ($http, $window) {
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
 // .factory('Modules', function($http, $window) {
 //  return $http.get('http://backend-dev.kevinott.de/api/modules/student/', {
 //    headers: {'x-session': $window.sessionStorage.mySessionId, 'x-key': $window.sessionStorage.userid}
// })
// })
