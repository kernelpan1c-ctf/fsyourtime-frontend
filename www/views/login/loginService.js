angular.module('app')

  .factory('UserService', function ($http) {
    return {
      signIn: function (username, password) {
        return $http.post('https://cert-campus.frankfurt-school.de/clicnetclm/loginService.do', {
          xaction: 'login',
          username: username,
          password: password,
          language: 'en'
        });
      },

      logOut: function () {
        return $http.get('https://cert-campus.frankfurt-school.de/clicnetclm/loginService.do', {
          xaction: 'logout'
        });
      }
    };
  });
