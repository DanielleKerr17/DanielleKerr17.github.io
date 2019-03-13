// Multicoloured Grid
// Danielle
// 03/12/2019
//
// Extra for Experts:
// - created a color sceme

let sNumber = 50;
let count = true;
let sBlue, sRed, sGreen;
let squareSize = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  if (count){
    makeSquares();
  }
}

function makeSquares(){

  for (let x = 0; x < width; x+= squareSize){
    for (let y = 0; y < height; y+= squareSize){
      fill(random(200,255), random(200,255), random(170,255));
      rect(x,y, squareSize, squareSize);
    }

  }
  count = false;
}


function mousePressed(){
  if (mouseButton === RIGHT){
    squareSize -= 10;
    count = true;
  }
  if (mouseButton === LEFT){
    squareSize += 10;
    count = true;
  }
}

function keyPressed(){
  if (key === " "){
    count = true;
  }
}