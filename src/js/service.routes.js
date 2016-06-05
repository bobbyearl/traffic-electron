(function () {
  'use strict';

  RoutesService.$inject = [
    '$http',
    '$q'
  ];

  function RoutesService($http, $q) {

    var _this = this;
    var deferred = $q.defer();

    this._routes = [
      {
        name: '526',
        cameras: [
          { index: 307 },
          { index: 308 },
          { index: 309 },
          { index: 313 },
          { index: 319 },
          { index: 310 },
          { index: 311 },
          { index: 312 },
          { index: 314 },
          { index: 293 },
          { index: 294 },
          { index: 295 },
          { index: 296 },
          { index: 297 },
          { index: 298 },
          { index: 315 },
          { index: 316 }
        ]
      },
      {
        name: 'Ravenel Bridge',
        cameras: [
          { index: 326 },
          { index: 327 },
          { index: 328 },
          { index: 329 },
          { index: 330 },
          { index: 331 },
          { index: 332 },
          { index: 333 },
          { index: 334 }
        ]
      }
    ];

    _this.getRoutes = function () {
      return this._routes;
    };

    _this.getRoute = function (id) {
      return this._routes[id];
    };

    _this.init = function () {

      $http({
        url: './data/cameras-2014-10-01.json',
        method: 'GET'
      }).then(function (result) {
        _this.sites = result.data;
        addPropertiesToRoutes();
        deferred.resolve();
      });

      return deferred.promise;
    };

    function addPropertiesToRoutes() {
      for (let i in _this._routes) {
        for (let j in _this._routes[i].cameras) {
          let index = _this._routes[i].cameras[j].index;
          _this._routes[i].cameras[j].rtmp = _this.sites.features[index].properties.rtmp_url;
          _this._routes[i].cameras[j].http = _this.sites.features[index].properties.http_url;
        }
      }
    }

  }

  angular.module('traffic').service('RoutesService', RoutesService);

}());
