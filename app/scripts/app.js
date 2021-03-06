'use strict';

/**
 * @ngdoc overview
 * @name moneyWatchApp
 * @description
 * # moneyWatchApp
 *
 * Main module of the application.
 */
angular
  .module('moneyWatchApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
