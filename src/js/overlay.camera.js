function CameraOverlay(camera) {

  this.player = document.createElement('div');
  //this.player.innerHTML = camera.id;
  this.player.id = 'player-' + camera.id;
  this.camera = camera;

  this.div = document.createElement('div');
  this.div.id = 'wrapper-' + camera.id;
  this.div.className = 'camera';
  this.div.appendChild(this.player);

  this.latlng = new google.maps.LatLng(
    camera.geometry.coordinates[1],
    camera.geometry.coordinates[0]
  );
}

CameraOverlay.prototype = new google.maps.OverlayView();

CameraOverlay.prototype.ready = false;
CameraOverlay.prototype.initialize = false;

CameraOverlay.prototype.onRemove = function () {
  this.div.remove();
};

CameraOverlay.prototype.onAdd = function () {
  this.getPanes().overlayLayer.appendChild(this.div);
  this.ready = true;
  if (this.initialize) {
    this.initialize = false;
    this.enableWhenReady();
  }
};

CameraOverlay.prototype.draw = function () {
  var position = this.getProjection().fromLatLngToDivPixel(this.latlng);
  this.div.style.left = position.x + 'px';
  this.div.style.top = position.y + 'px';
};

CameraOverlay.prototype.enable = function () {
  if (!this.ready) {
    this.initialize = true;
  } else {
    this.ready = true;
    this.enableWhenReady();
  }
};

CameraOverlay.prototype.enableWhenReady = function () {
  jwplayer(this.player.id).setup({
    autostart: true,
    stretching: 'fill',
    height: 75,
    width: 100,
    wmode: 'transparent',
    playlist: [{
      sources: [
        { file: this.camera.properties.rtmp_url },
        { file: this.camera.properties.http_url }
      ]
    }]
  });
};

CameraOverlay.prototype.disable = function () {
  jwplayer(this.player.id).remove();
};
