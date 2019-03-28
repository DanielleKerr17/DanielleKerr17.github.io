//Image Demo

let direction = 1;
let gameImages = [];
let counter = 4;
let speed = 5;  //1 - 8
let y ; 
let x ;
  //1 - left
  //2 - right
function preload(){
  for (let i = 0; i < 9; i++){
    //Load all the images into the array
    gameImages.push(loadImage("assets/pin-0" + i + ".png"));             
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  imageMode(CENTER);
  
}

function draw() {
  background(220);
  // image(gameImages [counter], x, y);
  // keyPressed();
  idleFunction();

  
}

function idleFunction (){
  image(gameImages[counter], x, y);

  if (frameCount % int(speed) === 0){
    counter ++;
    if (counter > 8){
      counter = 4; 
    }
  }

}


  function keyPressed() {
    if (keyCode === LEFT_ARROW){
      counter = 1;
      x -= 1;
      
    } else if (keyCode === RIGHT_ARROW){
      counter = 2;
      x += 1;
    }
    else if (keyCode === UP_ARROW){
      counter = 3;
      y -= 1;
    }
    else if (keyCode === DOWN_ARROW){
      counter = 4;
      y += 1;
    }
    else if (keyCode === SHIFT){
      counter = 8;
  }
  else if (keyCode === ALT){
    counter = 5;
  }
}
  
