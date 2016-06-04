(function () {
  'use strict';

  Config.$inject = [
    '$urlRouterProvider',
    '$stateProvider',
  ];

  function Config ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            controller: 'HomeController',
            controllerAs: 'ctrl',
            templateUrl: './views/home.html',
            url: '/home'
        });
  }

  angular.module('traffic').config(Config);

}(window.angular));
