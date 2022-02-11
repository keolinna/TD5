class Game {
  // Properties
  playerName = null;
  dinosaur = null;
  score = null;
  speed = 10;
  level = 1;
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  
  // Methods
  start() {
    // Receive player name and save it.
    let playerName = document.getElementById("player_name").value;
    if (playerName) {
      this.playerName = playerName;
      console.log('Game is starting!!', this);
    } else {
      alert('Player name is required!!');
    }

    // Remove starting container from canvas
    let startingContainer = document.getElementById("starting-container");
    startingContainer.style.display = "none";

    // Initinalize dinosaur object and display it on the screen
    let dinosaur = new Dinosaur(this);
    dinosaur.move();
    // // Initialize tree object and display it on the screen
    let bird = new Bird(this);
    bird.move();
    //raod
    let road = new Raod(this);
    road.move();

    let cloud= new Cloud(this);
    cloud.move();


    

    window.addEventListener("keydown", (e) => {
        //    console.log(e);
        if (e.key == "ArrowUp"){
          dinosaur.jump();
        }
    });
    let count = 0;
    setInterval(() => {

      this.ctx.font = "15px Arial";
      this.ctx.strokeText("Score :"+count,190,50);
      count++;

    }, 50);

    setInterval(() => {


        let birdx = bird.getPositionX();
        let dinox = dinosaur.getPositionX();

        let birdy = bird.getPositionY();
        let dinoy = dinosaur.getPositionY();
        
        this.stop(dinox,birdx,dinoy,birdy);
    }, 250);
  }

  
  stop = (dinoX,birdX,dinoY,birdY) => {
    
    console.log("x1="+dinoX+" x2="+birdX+ " y1:"+dinoY+" Y2="+birdY);
    //if
    let zoneMin = dinoX-20;
    let zoneMax = dinoX+20;
    
    if(birdX>=zoneMin && birdX<=zoneMax && birdY==dinoY){
      alert("GAME OVER");
      location.reload();
    }
    
  }


  pause() {
    console.log('Pause the game');
  }
}