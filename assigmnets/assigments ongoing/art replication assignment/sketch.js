// Art replication
// Danielle
// 11/04/2019
//

//“Vertical-Horizontal No. 3” 
//The position of the end points of the lines
// was chosen at random with a uniform probability density. 
//One of the coordinates was then changed alternately to 
//create horizontal and vertical lines.

let x1 = 0;
let y1 = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(220);
  multipleLines();
}


function multipleLines(){
  for (i = 0; i < 200; i ++){
    horizontalLine();
    verticalLine();
  }
}

function horizontalLine(){
  let x2 = random(width);
  
  line(x1, y1, x2, y1 );
  x1 = x2;

}

function verticalLine(){
  let y2 = random(height);

  line(x1, y1, x1, y2);

  y1 = y2;

}
