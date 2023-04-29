class MenuScene extends Phaser.Scene{
  constructor(){
    super('MenuScene')
  }
//<---------- PRELOAD ---------->
  preload()
  {
    this.load.image('apple', 'assets/images/apple.png')
    this.load.image('arrow', 'assets/images/arrow.png')
    this.load.image('backyard', 'assets/images/backyard.png')
    this.load.image('bar', 'assets/images/bar.png')
    this.load.image('candy', 'assets/images/candy.png')
    this.load.image('logo', 'assets/images/logo.png')
    this.load.image('rotate', 'assets/images/rotate.png')
    this.load.image('duck', 'assets/images/rubber_duck.png')
    this.load.spritesheet('pet', 'assets/images/pet.png', {
      frameWidth: 97, frameHeight: 83
    })
  }
//<---------- CREATE  ---------->
  create()
  {
    this.background = this.add.image(0, 0, 'backyard').setOrigin(0, 0);
    this.background.setInteractive()
    this.background.on('pointerdown', function()
    {
      this.scene.start('Scene1')
    }, this);
    
    this.instruct = this.add.text(game.scale.width/2, (game.scale.height/2) + (game.scale.height/4), 'CLICK TO START').setOrigin(0.5)
    this.instruct.setStyle({
      fontFamily: 'Arial',
      fontSize: 40,
      color: '#000000',
      stroke: '#000000',
      strokeThickness: 1.6
    })
  }
}