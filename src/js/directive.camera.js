(function () {
  'use strict';

  Camera.$inject = [
    '$compile'
  ];

  function Camera($compile) {
    return {
      restrict: 'EC',
      scope: {
        playerId: '@',
        rtmp: '=rtmp',
        http: '=http'
      },
      link: function (scope, element, attrs) {
        var id = scope.playerId || 'random_player_' + Math.floor((Math.random() * 999999999) + 1);
        var getTemplate = function (playerId) {
          return '<div id="' + playerId + '"></div>';
        };

        element.html(getTemplate(id));
        $compile(element.contents())(scope);
        jwplayer(id).setup({
          autostart: true,
          stretching: 'fill',
          width: '100%',
          aspectratio: '4:3',
          playlist: [{
            sources: [
              { file: scope.rtmp },
              { file: scope.http }
            ]
          }]
        });
      }
    };
  }

  angular.module('traffic').directive('camera', Camera);

}());
