// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let colors = ["#362544", "#624B6D", "#8A557B", "#B55A7B", "#C97864"]


let rectWidth = 10; 
let rectHeight = 50; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  drawRowRGB(height * 0.2);
  drawRowHSB(height / 2);
  drawRowCustom(height * 0.8);
}


function drawRowCustom(yPos){
  colorMode(RGB);
  counter = 0;
  for (let x =0; x < width; x += rectWidth){
    fill(colors[int(random(colors.length))]);
    rect(x, yPos, rectWidth, rectHeight);
    counter ++;
  }

}

function drawRowHSB(yPos){
  colorMode(HSB, 360);
  for (let x =0; x < width; x += rectWidth){
    //fill will be hue followed by sat followed by brightness
    fill( x/3 %360, 280, 330);
    rect(x, yPos, rectWidth, rectHeight);
  }
}

function drawRowRGB(yPos){
  colorMode(RGB);
  for (let x =0; x < width; x += rectWidth){
    fill(random(255), random(255), random(255));
    rect(x, yPos, rectWidth, rectHeight);
  }
}

function draw() {
}
