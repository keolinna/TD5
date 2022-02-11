class Raod {
  road_img = null;
  width = 10;
  height = 20;
  speed = 10;
  ctx = null;
  positionX = null;
  positionY = null;

  constructor(gameContext) {
    this.gameContext = gameContext;
    this.positionX = 30;
    this.positionY = 270;
    
    this.appearance = new Image();
    this.appearance.src = "assets/images/road.png";
  
    this.appearance.onload = (() => {
      this.gameContext.ctx.drawImage(this.appearance, 0, 0, this.appearance.width, this.appearance.height, this.positionX, this.positionY, 0, 800);
    })
  }
  move = (() => {
      this.gameContext.ctx.drawImage(this.appearance, 0, 0, this.appearance.width, this.appearance.height, this.positionX, this.positionY, this.appearance.width, this.appearance.height);
      requestAnimationFrame(this.move);
  })

 

}