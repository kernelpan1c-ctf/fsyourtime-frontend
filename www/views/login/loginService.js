angular.module('app')

  .factory('UserService', function ($http) {
    return {
      signIn: function (username, password, syncdata) {
        return $http.post('http://10.9.11.133:3000/api/login', {
          username: username,
          password: password,
          syncdata: syncdata
        });
      },

      logOut: function () {
        return $http.get('https://cert-campus.frankfurt-school.de/clicnetclm/loginService.do', {
          xaction: 'logout'
        });
      }
    };
  });
