(function () {
  'use strict';

  PageController.$inject = [
    'bbPage',
    'RegionService'
  ];

  function PageController(bbPage, RegionService) {
    var _this = this;

    RegionService.getRegions().then(function (regions) {
      _this.regions = regions;
    });

  }

  angular.module('traffic').controller('PageController', PageController);

}());
