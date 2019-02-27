// Rollovers
// Danielle Kerr
// 2/26/2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let quad;
let colorI = 255;
let colorII = 255;
let colorIII = 255;
let colorIV = 255;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function determineQuad(){
  if (mouseX > width/2 && mouseX < width && mouseY > 0 && mouseY < height/2){
    quad = 1;
  }
  if (mouseX > 0 && mouseX < width/2 && mouseY > 0 && mouseY < height/2){
    quad = 2;
  }
  if (mouseX > 0 && mouseX < width/2 && mouseY > height/2 && mouseY < height){
    quad = 3;
  }
  if (mouseX > width/2 && mouseX < width && mouseY > height/2 && mouseY < height){
    quad = 4;
  }
}

function mousePressed(){
  if 
}

function draw() {
  background(255);
  determineQuad();
  //quad 2
  if (quad == 2){
    colorII = 0;
    fill(colorII);
    
  }
  else{
    colorII += 5;
    
  }
  colorII = constrain(colorII, 0, 255);
  fill(colorII);
  rect(0,0,width/2,height/2);
 
  // quad 1 

  if (quad == 1){
    colorI = 0;
    fill(colorI);
    
  }
  else {
    colorI += 5;
  }
  colorI = constrain(colorI, 0, 255);
  fill(colorI);
  rect(width/2,0,width/2,height/2);
 

  
  //quad 3
  if (quad == 3){
    colorIII = 0;
    fill(colorIII);

  }
  else{
    colorIII += 5;
    
}
  colorIII = constrain(colorIII, 0, 255);
  fill(colorIII);
  rect(0,height/2,width/2,height/2);

  
  // quad 4
  if (quad == 4){
    colorIV = 0;
    fill(colorIV);

  }
  else{
    colorIV += 5;
  }
  colorIV = constrain(colorIV, 0, 255);
  fill(colorIV);
  rect(width/2,height/2,width/2,height/2);
  
}
