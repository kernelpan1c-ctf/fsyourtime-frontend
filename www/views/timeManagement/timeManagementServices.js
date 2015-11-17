/**
 * Created by justus on 06.10.15.
 */

angular.module('app')

  .factory('Efforts', function ($http, $resource, $filter) {
    return {
      save: function (sessionId, userid, amount, moduleid, studentid, efftypeid, performancedate) {
        var config = {headers: {'x-session': sessionId, 'x-key': userid}};
        return $http.post(options.api.base_url + 'api/efforts', {
          amount: amount,
          moduleid: moduleid,
          studentid: studentid,
          efforttypeid: efftypeid,
          performancedate: performancedate
        }, config);
      },

      query: function (moduleid) {
        return $resource(options.api.base_url + 'api/efforts/module/' + moduleid, {}, {
          query: {
            method: 'GET',
            headers: {'x-session': sessionStorage.mySessionId, 'x-key': sessionStorage.userid},
            isArray: true
          }
        }).query();
      },

      update: function (effortid, amount, efforttypeid) {
        /* return $http.put('http://backend-dev.kevinott.de/api/efforts/' + effortid , {}, {
         headers: {'x-session': sessionStorage.mySessionId, 'x-key': sessionStorage.userid},
         amount: amount,
         efforttypeid: efforttypeid
         });
         },*/

        return $http({
          url: options.api.base_url + 'api/efforts/' + effortid,
          method: "PUT",
          data: {amount: amount, efforttypeid: efforttypeid},
          headers: {'x-session': sessionStorage.mySessionId, 'x-key': sessionStorage.userid}
        })
      },

      getbyid: function (effortid) {
        return $resource(options.api.base_url + 'api/efforts/' + effortid, {}, {
          query: {
            method: 'GET',
            headers: {'x-session': sessionStorage.mySessionId, 'x-key': sessionStorage.userid},
            isArray: false
          }
        })
      },
      delete: function (effortid){
        //alert("test");
        return $http({
          url: options.api.base_url + 'api/efforts/' + effortid,
          method: "DELETE",
          headers: {'x-session': sessionStorage.mySessionId, 'x-key': sessionStorage.userid}
        })
      },

    }
  })

  .factory('EffortTypes', function ($resource) {
    return $resource(options.api.base_url + 'api/efforttypes', {}, {
      query: {
        method: 'GET',
        headers: {'x-session': sessionStorage.mySessionId, 'x-key': sessionStorage.userid},
        isArray: true
      }
    })
  })

  .factory('Modules', function ($resource) {
    return {
      query: function () {
        return $resource(options.api.base_url + 'api/modules/student', {}, {
          query: {
            method: 'GET',
            headers: {'x-session': sessionStorage.mySessionId, 'x-key': sessionStorage.userid},
            isArray: true
          }
        }).query();
      }
    };
  });

