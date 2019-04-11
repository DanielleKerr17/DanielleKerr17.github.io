//Image Demo
// Danielle Kerr
//04/09/2019
//___________________________________________________________________________________________________________________
//VARIABLES 

let direction = 1;
let gameImages = [];
let counter = 4;
let speed = 5; 
let y;
let x;
//___________________________________________________________________________________________________________________

function preload() {
  for (let i = 0; i < 19; i++) {
    //Load all the images into the array
    gameImages.push(loadImage("assets/pin-0" + i + ".png"));
  }
}
//___________________________________________________________________________________________________________________

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  imageMode(CENTER);

}

function draw() {
  background(200);
  drawCharecter();
  myKeyPressed()

}
//___________________________________________________________________________________________________________________

function drawCharecter() {                //draws the charecter
  image(gameImages[counter], x, y);
}
//___________________________________________________________________________________________________________________

function myKeyPressed() {
  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW) {         // this if statement makes the sprite look like its facing left
      if (frameCount % 4 ===0){           //slows down the draw
        counter ++;
        if (counter > 9){
          counter = 0;
        }
      }
      x -= 5;                             //this also makes the sprite move

    } else if (keyCode === RIGHT_ARROW) { // this if statement makes the sprite look like its facing right
      if (frameCount % 4 ===0){
      counter ++;
        if(counter > 18){                 //loops whithin the images that face right
          counter = 10;                   //^
        }
      }
      x += 5;                             //makes the sprite go right
    }
  }
}
//___________________________________________________________________________________________________________________
