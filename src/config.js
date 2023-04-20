var config = {
  type: Phaser.AUTO,
  width: 360,
  height: 640,
  resolution: window.devicePixelRatio,
  scale: {
    mode: Phaser.Scale.ScaleModes.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    align: {
      x: 0.5,
      y: 0.5
    }
  },
  debug: true,
  scene: [MenuScene, Scene1]
}

var game = new Phaser.Game(config);