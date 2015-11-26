// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controller_beispiele.js
angular.module('app', ['ionic', 'ngRoute', 'ngResource', 'ngCordova'])

  .run(function($rootScope, $ionicPlatform, $ionicLoading, $window) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
    $rootScope.show = function (text) {
      $rootScope.loading = $ionicLoading.show({
        template: text ? text : 'Loading..',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
      });
    };

    $rootScope.hide = function () {
      $ionicLoading.hide();
    };

    $rootScope.notify = function (text) {
      $rootScope.show(text);
      $window.setTimeout(function () {
        $rootScope.hide();
      }, 1999);
    };
  })


  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('login', {
        url: '/login',
        templateUrl: 'views/login/loginView.html',
        controller: 'loginController'
      })

      .state('privacy', {
        url: '/privacy',
        templateUrl: 'views/privacy/privacyView.html',
        controller: 'privacyController'
      })

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'views/menu/menu.html',
        controller: 'menuController'
      })

      .state('app.settings', {
        url: '/settings',
        views: {
          'menuContent': {
            templateUrl: 'views/settings/settingsView.html',
            controller: 'settingsController'
          }
        }
      })
      .state('app.timer', {
        url: '/timer',
        views: {
          'menuContent': {
            templateUrl: 'views/timer/timerView.html',
            controller: 'MainCtrl'
          }
        }
      })
      .state('app.timeManagement', {
        url: '/timeManagement',
        views: {
          'menuContent': {
            templateUrl: 'views/timeManagement/timeManagementView.html',
            controller: 'timeManagementController'
          }
        }
      })
      .state('app.timeChanger', {
        url: '/timeChanger',
        views: {
          'menuContent': {
            templateUrl: 'views/timechanger/timeChangerview.html',
            controller: 'timeChangerController'
          }
        }
      })
      .state('app.timeChangerDetail', {
        url: '/timeChangerDetail/:id',
        views: {
          'menuContent': {
            templateUrl: 'views/timeChangerDetail/timeChangerDetailView.html',
            controller: 'timeChangerDetailController',
            resolve: {
              effort: function($stateParams, EffortService) {
                return EffortService.getEffort($stateParams.id)
              }
            }
          }
        }
      })
      .state('app.help', {
        url: '/help',
        views: {
          'menuContent': {
            templateUrl: 'views/help/helpView.html',
            controller: 'timeChangerController'
          }
        }
      })
      .state('app.contact', {
        url: '/contact',
        views: {
          'menuContent': {
            templateUrl: 'views/contact/contactView.html',
            controller: ''
          }
        }
      })
      .state('app.privacy', {
        url: '/privacy',
        views: {
          'menuContent': {
            templateUrl: 'views/privacyInfo/privacyInfoView.html'
          }
        }
      })

    ;
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
  });

var options = {};
options.api = {};
options.api.base_url = "http://backend-dev.kevinott.de/";
