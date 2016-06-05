(function () {
  'use strict';

  Config.$inject = [
    '$urlRouterProvider',
    '$stateProvider'
  ];

  function Config($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('home', {
        controller: 'HomeController',
        controllerAs: 'ctrl',
        templateUrl: './views/home.html',
        url: '/home'
      })
      .state('route', {
        controller: 'RouteController',
        controllerAs: 'ctrl',
        templateUrl: './views/route.html',
        url: '/route/:id'
      });
  }

  angular.module('traffic').config(Config);

}(window.angular));
