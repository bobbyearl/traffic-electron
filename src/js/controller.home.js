(function () {
  'use strict';

  var infoWindow;
  var map;
  var markers;
  var regions;
  var trafficLayer;
  var markers = [];

  HomeController.$inject = [
    '$q',
    'RegionService',
    'NgMap'
  ];

  function HomeController($q, RegionService, NgMap) {
    var _this = this;

    // $q.all([
    //   RegionService.getRegions(),
    //   NgMap.getMap(),
    // ]).then(function (resolves) {
    //   map = resolves[1];
    //   regions = resolves[0];
    //
    //   infoWindow = new google.maps.InfoWindow();
    //   trafficLayer = new google.maps.TrafficLayer();
    //   trafficLayer.setMap(map);
    //
    //   regions[0].cameras.forEach(function (camera) {
    //     var overlay = new CameraOverlay(camera);
    //     overlay.setMap(map);
    //   });
    //
    // });

  }

  angular.module('traffic').controller('HomeController', HomeController);

}());
