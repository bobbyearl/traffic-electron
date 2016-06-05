(function () {
  'use strict';

  Run.$inject = [
    'bbWait',
    'RoutesService'
  ];

  function Run(bbWait, RoutesService) {
    bbWait.beginPageWait();
    RoutesService.init().then(function () {
      bbWait.endPageWait();
    });
  }

  angular.module('traffic').run(Run);

}(window.angular));
