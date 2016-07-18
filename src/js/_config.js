(function () {
  'use strict';

  Config.$inject = [
    '$urlRouterProvider',
    '$stateProvider'
  ];

  function Config($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/map');
    $stateProvider
      .state('home', {
        controller: 'HomeController',
        controllerAs: 'ctrl',
        templateUrl: './views/home.html',
        url: '/home'
      })
      .state('map', {
        controller: 'MapController',
        controllerAs: 'ctrl',
        templateUrl: './views/map.html',
        url: '/map/{regionId}/{routeId}'
      });
  }

  angular.module('traffic').config(Config);

}(window.angular));
