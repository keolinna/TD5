class Bird {
  shape = null;
  size = null;
  width = 20;
  height = 30;
  positionX = null;
  positionY = null;
  speed = 30;
  frameIndex = 0;


  constructor(gameContext) {
    //get canvas
    this.gameContext = gameContext;
    
    //shape of birth
    this.shape = new Image();
    this.shape.src = "assets/images/bird.png";

    //start from right=Canvaswith
    this.positionX = this.gameContext.canvas.width;
    this.positionY = 200;
    

    this.shape.onload = (() => {
      console.log('draw image');
      this.gameContext.ctx.drawImage(this.shape, 0, 0, 200, 200, 10, 10, 75, 75);
    })
  }

  move = (() => {
    if (this.frameIndex > 9) {
      this.frameIndex = 0;
    }
    setTimeout(() => {
  
      if (this.positionX > -200) {

        //speed change
        this.positionX = this.positionX - this.speed;
        this.gameContext.ctx.clearRect(0, 0, this.gameContext.canvas.width, this.gameContext.canvas.height); 
        // console.log(this.positionX);
        this.gameContext.ctx.drawImage(
          this.shape, 
          this.frameIndex * 200, 0, 200, 200, // Source image (birth)
          this.positionX, this.positionY, 75, 75 // Destination
        );
        requestAnimationFrame(this.move)
        this.frameIndex++;  // the same as: this.frameIndex = this.frameIndex + 1;
      }

      if(this.positionX<0){
        this.positionX= this.gameContext.canvas.width;
      }
    }, 100);
  })

  getPositionX(){
    return this.positionX;
  }
  getPositionY(){
    return this.positionY;
  }

}