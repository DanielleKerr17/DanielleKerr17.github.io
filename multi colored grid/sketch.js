// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let sNumber = 50;
let sBlue, sRed, sGreen;
let squareSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  makeSquares();
}

function makeSquares(){
  squareSize = width/sNumber;
  makeColours();
  if (mouseIsPressed){
    if (mouseButton === RIGHT){
      sNumber =- 1;
      print(mouseButton);
    }
    if (mouseButton === LEFT){
      sNumber =+ 1;
      print(mouseButton);
    }
    if (mouseButton === CENTER) {
      sNumber = 50;
    }

  }

  for (let x = 0; x < width; x+= squareSize){
    for (let y = 0; y < height; y+= squareSize){
      fill(random(sBlue, sRed, sGreen));
      rect(x,y, squareSize, squareSize);
    }
  }
}

function makeColours(){
  sRed = (random() );
  sBlue = (random(200));
  sGreen = (random(200));
}