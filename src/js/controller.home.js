(function () {
  'use strict';

  HomeController.$inject = [
  ];

  function HomeController () {
    var vm = this;
    vm.name = 'Smith';
  }

  angular.module('traffic').controller('HomeController', HomeController);

}(window.angular));
