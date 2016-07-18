(function () {
  'use strict';

  Run.$inject = [
    'CameraService'
  ];

  function Run(CameraService) {
    CameraService.init();
  }

  angular.module('traffic').run(Run);

}(window.angular));
