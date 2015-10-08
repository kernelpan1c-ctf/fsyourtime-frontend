angular.module('app')

  .factory('UserService', function ($http) {
    return {

      /*
       signIn: function (username, password) {
       var req = {
       method: 'POST',
       url: 'https://cert-campus.frankfurt-school.de/clicnetclm/loginService.do',
       headers: {
       'Content-Type': 'application/x-www-form-urlencoded'
       },
       data: {
       xaction: "login",
       username: username,
       password: password
       }
       };
       return $http(req);
       },*/

      signIn: function (username, password) {
        return $http.post('https://cert-campus.frankfurt-school.de/clicnetclm/loginService.do', {
          xaction: "login",
          username: username,
          password: password
        })
      },


      logOut: function () {
        return $http.get('https://cert-campus.frankfurt-school.de/clicnetclm/loginService.do', {
          xaction: 'logout'
        });
      }
    };
  });
