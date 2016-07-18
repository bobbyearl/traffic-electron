(function () {
  'use strict';

  RegionController.$inject = [
    '$q',
    '$scope',
    '$stateParams',
    'NgMap',
    'RegionService'
  ];

  function RegionController($q, $scope, $stateParams, NgMap, RegionService) {
    var _this = this;

    $q.all([
      RegionService.getRegion($stateParams.regionId),
      RegionService.getRoute($stateParams.regionId, $stateParams.routeId),
      NgMap.getMap(),
    ]).then(function (resolves) {

      _this.region = resolves[0];
      var route = resolves[1];
      var map = resolves[2];
      var overlays = [];

      var trafficLayer = new google.maps.TrafficLayer();
      var bounds = new google.maps.LatLngBounds();

      route.cameras.forEach(function (camera) {

        var overlay = new CameraOverlay(camera);
        overlay.setMap(map);
        overlays.push(overlay);
        bounds.extend(overlay.latlng);

      });

      // Zoom into the current markers
      map.fitBounds(bounds);
      map.setCenter(bounds.getCenter());
      trafficLayer.setMap(_this.map);

      $scope.$on('$destroy', function () {
        if (overlays) {
          overlays.forEach(function (overlay) {
            overlay.setMap(null);
          });
        }
      });

    });
  }

  angular.module('traffic')
    .controller('RegionController', RegionController);

}());
