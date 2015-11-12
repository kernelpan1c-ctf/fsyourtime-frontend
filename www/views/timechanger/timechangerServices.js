/**
 * Created by justus on 06.10.15.
 */

angular.module('app')

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
              performancedate: performancedate,
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
  })
