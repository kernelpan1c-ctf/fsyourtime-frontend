angular.module('app')

  .factory('UserService', function ($http) {
    return {
      signIn: function (username, password) {
        return $http.post('http://backend-dev.kevinott.de/api/login', {
          username: username,
          password: password
        });
      },

      logOut: function () {
        return $http.get('https://cert-campus.frankfurt-school.de/clicnetclm/loginService.do', {
          xaction: 'logout'
        });
      }
    };
  });
