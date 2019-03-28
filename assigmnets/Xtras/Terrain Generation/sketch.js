// Perlin Noise Project
// Danielle Kerr
// 03/14/2019
//
// Extra for Experts:
// - i placed the flag at the summit, and coloured the background pretty!!!!
let tWidth = 1
let inc = 0.01;
let start = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  //noLoop();
}


function drawTerrain(){         // ------------- draws the "Terrain"

  let xOff = start;
  let highest = height;
  let highestX = 0;

  for(let x = 0; x < width; x += tWidth){
    let curHeight = noise(xOff) * height

    if (curHeight < highest){
      highest = curHeight;
      highestX = x;
    }
     //rect(x, random(height), x + tWidth, height);
     stroke(0);
     rect(x, curHeight, x + tWidth, height);
     xOff += 0.01;
     var xoff = start;
     var y = noise(xoff) * height;
     xoff += inc;
   }



  drawFlag(highestX, highest);

  start += inc;
}

function drawFlag(xValue, yValue){            // ------------ draws the "Flag"
//at highest point - print flag.
  stroke(0);
  fill(0);
  strokeWeight(1);
  rect(xValue - 5, yValue + 6, xValue +3, yValue - 53);
  stroke(255, 255, 255);
  fill(255, 255 ,20);
  strokeWeight(3);
  triangle(xValue + 7, yValue - 30, xValue + 7, yValue - 50, xValue + 30, yValue - 40);
}


function perAverage(){
  //height - curheight
  totalHeight = height - curheight 
  totalHeight/tWidth 
}


function draw() {
  background(255, 50 ,0);
  drawTerrain();
}

