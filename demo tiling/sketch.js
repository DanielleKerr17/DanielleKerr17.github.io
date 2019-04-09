// diagonal line generator
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
const spacing = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}


function diagonalAscending(x,y, s){
  line(x-s/2, y+s/2, x+s/2, y-s/2);

}

function diagonalDecending(x,y, s){
  line(x-s/2, y -s/2, x+s/2, y+s/2);

}

function draw() {
  background(220);
  for (let x = spacing/2; x < width - spacing/2; x+= spacing){
    for (let y = spacing/2; y < height - spacing/2; y += spacing){
      if (int(random(2)) === 0 ){
        diagonalDecending(x , y, spacing);
      }
      else{
        diagonalAscending(x, y, spacing);
      }
    }
  }
  
}
