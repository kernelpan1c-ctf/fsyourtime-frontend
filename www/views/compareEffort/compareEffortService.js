/**
 * Created by Chris on 30/11/15.
 */

angular.module('app')


  .factory('compareServices', function ($resource){
    return {
      doComparison: function (moduleid) {
        return $resource(options.api.base_url + 'api/compare/module/' + moduleid, {}, {
          query: {
            method: 'GET',
            headers: {'x-session': sessionStorage.mySessionId, 'x-key': sessionStorage.userid},
            isArray: false
          }
        }).query()
      }}

  });
