/**
 * Created by justus on 06.10.15.
 */

angular.module('app')

  .factory('Efforts', function($resource){
    return $resource('http://10.9.11.133:3000/api/Efforts');
  })

  .factory('Modules', function($resource){
    return $resource('http:/10.9.11.133:3000//api/Modules');
  })


