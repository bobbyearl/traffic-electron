(function () {
  'use strict';

  var json;
  var regions = [
    {
      name: 'Charleston',
      center: '32.8525067,-79.9417623',
      zoom: 12,
      routes: [
        {
          name: '26 - Downtown',
          ids: [
            '60022',
            '60023',
            '60024'
          ],
          cameras: []
        },
        {
          name: '26 - North Charleston',
          ids: [
            '60014',
            '60015',
            '60016',
            '60017',
            '60018',
            '60019',
            '60020',
            '60021'
          ],
          cameras: []
        },
        {
          name: '26 - Summerville',
          ids: [
            '60001',
            '60002',
            '60003',
            '60004',
            '60005',
            '60006',
            '60007',
            '60008',
            '60009',
            '60010',
            '60012',
            '60013'
          ],
          cameras: []
        },
        {
          name: '526 - Mount Pleasant',
          ids: [],
          cameras: []
        },
        {
          name: '526 - North Charleston',
          ids: [],
          cameras: []
        },
        {
          name: '526 - West Ashley',
          ids: [],
          cameras: []
        },
        {
          name: 'Ravenel Bridge',
          ids: [],
          cameras: []
        }
      ]
    },
    {
      name: 'Columbia',
      routes: [
        {
          name: '*',
          ids: [],
          cameras: []
        }
      ]
    },
    {
      name: 'Florence',
      routes: [
        {
          name: '*',
          ids: [],
          cameras: []
        }
      ]
    },
    {
      name: 'Gaffney',
      routes: [
        {
          name: '*',
          ids: [],
          cameras: []
        }
      ]
    },
    {
      name: 'Greenville',
      routes: [
        {
          name: '*',
          ids: [],
          cameras: []
        }
      ]
    },
    {
      name: 'Myrtle Beach',
      routes: [
        {
          name: '*',
          ids: [],
          cameras: []
        }
      ]
    },
    {
      name: 'Rock Hill',
      routes: [
        {
          name: '*',
          ids: [],
          cameras: []
        }
      ]
    }
  ];

  RegionService.$inject = [
    '$http',
    '$q'
  ];

  function RegionService($http, $q) {

    var _this = this;

    _this.getRegions = function () {
      return $q(function (resolve, reject) {
        getJSON().then(function (result) {
          parseIntoRegions(result);
          resolve(regions);
        });
      });
    };

    _this.getFeatures = function () {
      return $q(function (resolve, reject) {
        getJSON().then(function (result) {
          resolve(result.features);
        });
      });
    };

    _this.getRegion = function (regionId) {
      return regions[regionId];
    };

    _this.getRoute = function (regionId, routeId) {
      return regions[regionId].routes[routeId];
    };

    function getJSON() {
      return $q(function (resolve, reject) {
        if (json) {
          resolve(json);
        } else {
          $http({
            url: './data/cameras-2016-05-05.json',
            method: 'GET'
          }).then(function (result) {
            json = result.data;
            resolve(json);
          });
        }
      });
    }

    function parseIntoRegions(json) {
      json.features.forEach(function (feature) {
        regions.forEach(function (region) {
          if (region.name.indexOf(feature.properties.region) > -1) {
            region.routes.forEach(function (route) {
              if (route.name === '*' || route.ids.indexOf(feature.id) > -1) {
                route.cameras.push(feature);
              }
            });
          }
        });
      });
    }

  }

  angular.module('traffic').service('RegionService', RegionService);

}());
