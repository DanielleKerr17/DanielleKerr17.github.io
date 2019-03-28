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
let hoverII = false;
let hoverIV = false;


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


function draw() {
  background(255);
  determineQuad();
  //quad 2             FADE OUT
  if (quad == 2){
    hoverII = true;
    colorII = 0;
    fill(colorII);
    
  }
  else{
    colorII += 5;
    hoverII = false;
    
  }
  colorII = constrain(colorII, 0, 255);
  fill(colorII);
  rect(0,0,width/2,height/2);
 
  // quad 1         FADE OUT

  if (quad == 1){
    colorI = 0;
    
  }
  else {
    colorI += 5;
  }
  colorI = constrain(colorI, 0, 255);
  fill(colorI);
  rect(width/2,0,width/2,height/2);
 

  
  //quad 3         FADE OUT
  if (quad == 3){
    colorIII = 0;

  }
  else{
    colorIII += 5;
    
}
  colorIII = constrain(colorIII, 0, 255);
  fill(colorIII);
  rect(0,height/2,width/2,height/2);

  
  // quad 4         FADE OUT
  if (quad == 4){
    hoverIV = true;
    colorIV = 0;

  }
  else{
    colorIV += 5;
    hoverIV = false;
  }
  colorIV = constrain(colorIV, 0, 255);
  fill(colorIV);
  rect(width/2,height/2,width/2,height/2);
  
}
