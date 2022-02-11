class Dinosaur {
  appearance = null;
  width = 15;
  height = 25;
  speed = 10;
  ctx = null;
  positionX = null;
  positionY = null;

  constructor(gameContext) {
    this.gameContext = gameContext;
    this.positionX = 60;
    this.positionY = 200;
    
    
    this.appearance = new Image();
    this.appearance.src = "assets/images/giphy.gif";

  

    // this.appearance.onload = (() => {
    //   this.gameContext.ctx.drawImage(this.appearance, 0, 0, this.appearance.width, this.appearance.height, this.positionX, this.positionY, 75, 75);
    // })
  }
  move = (() => {
    
    this.gameContext.ctx.drawImage(this.appearance, 0, 0, this.appearance.width, this.appearance.height, this.positionX, this.positionY, 75, 75);
    requestAnimationFrame(this.move);  
    
  })

  setSpeed(baseSpeed, level) {
    this.speed = baseSpeed + level;
  }


  jump = ()=>{
    // this.gameContext.ctx.drawImage(this.appearance, 0, 0, this.appearance.width, this.appearance.height, this.positionX, this.positionY, 75, 75);
    // requestAnimationFrame(this.jump);     
    setTimeout(() => {
      if (this.positionY > 120) {
        //speed change
        this.positionY = this.positionY  - 20;
        requestAnimationFrame(this.jump); 
      }
      else if(this.positionY == 120){
          this.positionY = 200;
          this.move;
      }
    }, 100);
  }


  getPositionX(){
    return this.positionX;
  }
  getPositionY(){
    return this.positionY;
  }

  
}

