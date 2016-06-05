(function () {
  'use strict';

  HomeController.$inject = [
  ];

  function HomeController() {
    var _this = this;
    _this.name = 'Smith';
  }

  angular.module('traffic').controller('HomeController', HomeController);

}());
