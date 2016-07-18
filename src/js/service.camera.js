(function () {
  'use strict';

  CameraService.$inject = [
    '$q',
    'NgMap',
    'RegionService'
  ];

  var overlays = {};

  function CameraService($q, NgMap, RegionService) {
    var _this = this;

    _this.enable = function (id) {
      return _this.init().then(function () {
        overlays[id].enable();
      });
    };

    _this.disable = function (id) {
      return _this.init().then(function () {
        overlays[id].disable();
      });
    };

    _this.getLatLng = function (id) {
      return overlays[id].latlng;
    };

    _this.init = function () {
      return $q.all([
        NgMap.getMap(),
        RegionService.getFeatures(),
      ]).then(function (resolves) {
        resolves[1].forEach(function (feature) {
          overlays[feature.id] = new CameraOverlay(feature);
          overlays[feature.id].setMap(resolves[0]);
        });
      });
    };

  }

  angular.module('traffic').service('CameraService', CameraService);

}());
