(function () {
  'use strict';

  PageController.$inject = [
    'bbPage',
    'RoutesService'
  ];

  function PageController(bbPage, RoutesService) {
    var _this = this;

    //_this.status = bbPage.pageStatuses.LOADED;
    _this.routes = RoutesService.getRoutes();

  }

  angular.module('traffic').controller('PageController', PageController);

}());
