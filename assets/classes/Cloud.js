class Cloud {
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
    this.shape.src = "assets/images/cloud.png";

    //start from right=Canvaswith
    this.positionX = this.gameContext.canvas.width;
    this.positionY = 110;
    

    this.shape.onload = (() => {
      this.gameContext.ctx.drawImage(this.shape, 0, 0,this.shape.width,this.shape.height, this.positionX, this.positionY, 75, 75);
    })
  }

  move = (() => {
    
    setTimeout(() => {
  
      if (this.positionX > -700) {

        //speed change
        this.positionX = this.positionX - this.speed;
        
        // console.log(this.positionX);
        this.gameContext.ctx.drawImage(this.shape, 0, 0,this.shape.width,this.shape.height, this.positionX, this.positionY, this.shape.width, this.shape.height);
        requestAnimationFrame(this.move)
        this.frameIndex++;  // the same as: this.frameIndex = this.frameIndex + 1;
      }

      if(this.positionX<-600){
        this.positionX= this.gameContext.canvas.width;
      }
    }, 100);
  })

}