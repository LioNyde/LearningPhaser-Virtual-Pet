class Scene1 extends Phaser.Scene {
  constructor(){
    super('Scene1')
  }
  
  create(){
    console.log('SCENE1')
//<---------- BACKGROUND IMAGE ---------->
    this.background = this.add.image(0, 0, 'backyard').setOrigin(0, 0)
    
//<---------- BUTTONS ---------->
    this.apple = this.add.sprite(72, 570, 'apple')
    this.candy = this.add.sprite(144, 570, 'candy')
    this.toy = this.add.sprite(216, 570, 'duck')
    this.rotate = this.add.sprite(288, 570, 'rotate')

//<---------- INTERACTIVE BUTTONS ---------->
    this.apple.setInteractive({pixelPerfect: true, useHandCursor: true})
    this.candy.setInteractive({pixelPerfect: true, useHandCursor: true})
    this.toy.setInteractive({pixelPerfect: true, useHandCursor: true})
    this.rotate.setInteractive({pixelPerfect: true, useHandCursor: true})

//<---------- CUSTOM PARAMETERS ---------->
    this.apple.instanceVariable = {health: 20}
    this.candy.instanceVariable = {health: -10, fun: 10}
    this.toy.instanceVariable = {fun: 20}

//<---------- THE PET ---------->
    this.pet = this.add.sprite(150, 300, 'pet')
    this.pet.instanceVariable = {health: 100, fun: 100}
    this.pet.setInteractive({pixelPerfect: true, useHandCursor: true})   
    this.input.setDraggable(this.pet);
    this.input.on('drag', (pointer, gameObject, dragX, dragY) =>
    {
      gameObject.x = dragX
      gameObject.y = dragY
    });
  }
  
  
}