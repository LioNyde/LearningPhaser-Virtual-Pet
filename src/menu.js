class MenuScene extends Phaser.Scene{
  constructor(){
    super('MenuScene')
  }
//<---------- PRELOAD ---------->
  preload()
  {
    
  }
//<---------- CREATE  ---------->
  create()
  {
    console.log('MENU')
    this.scene.start('Scene1')
 }
}