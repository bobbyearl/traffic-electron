(function () {
  'use strict';

  MapController.$inject = [
    '$q',
    '$scope',
    '$stateParams',
    'bbWait',
    'NgMap',
    'CameraService',
    'RegionService'
  ];

  var overlays = {};

  function MapController($q, $scope, $stateParams, bbWait, NgMap, CameraService, RegionService) {

    var _this = this;
    var map;
    var bounds;

    bbWait.beginPageWait();
    $q.all([
      NgMap.getMap(),
      RegionService.getRoute($stateParams.regionId, $stateParams.routeId),
      CameraService.init()
    ]).then(function (resolves) {

      _this.route = resolves[1];
      map = resolves[0];
      bounds = new google.maps.LatLngBounds();

      console.log(_this.route);

      _this.route.cameras.forEach(function (camera) {
        CameraService.enable(camera.id);
        bounds.extend(CameraService.getLatLng(camera.id));
      });

      map.fitBounds(bounds);
      map.setCenter(bounds.getCenter());
      bbWait.endPageWait();

    });

    _this.modal = function (camera) {
      console.log(camera);
    };

    $scope.$on('$destroy', function () {
      _this.route.ids.forEach(function (id) {
        CameraService.disable(id);
      });
    });
  }

  angular.module('traffic').controller('MapController', MapController);

}(window.angular));
