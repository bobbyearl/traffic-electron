(function () {
  'use strict';

  RouteController.$inject = [
    '$stateParams',
    'RoutesService'
  ];

  function RouteController($stateParams, RoutesService) {
    var _this = this;
    _this.id = $stateParams.id;
    _this.route = RoutesService.getRoute($stateParams.id);
  }

  angular.module('traffic').controller('RouteController', RouteController);

}());
