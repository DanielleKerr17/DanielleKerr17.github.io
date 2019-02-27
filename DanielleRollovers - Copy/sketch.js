// Rollovers
// Danielle Kerr
// 2/26/2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let quad;
let colorI = 255;
let colorII, colorIII, colorIV;
let rectShade; 
let fadeOut; 




function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  
  //quad 2
  if (mouseX > 0 && mouseX < width/2 && mouseY > 0 && mouseY < height/2){
    fill(0);
    
  }
  else{
    fill(255);
    
  }
  rect(0,0,width/2,height/2);
 
  // quad 1 

  if (mouseX > width/2 && mouseX < width && mouseY > 0 && mouseY < height/2){
    colorI = 0;
    fill(0);
    
  }
  else if (colorI = 0) {
    colorI += 2;
  }
  colorI = constrain(colorI, 0, 255);
  fill(colorI);
  rect(width/2,0,width/2,height/2);
 

  
  //quad 3
  if (mouseX > 0 && mouseX < width/2 && mouseY > height/2 && mouseY < height){
    fill(0);
    fadeOut = false;
  }
  else(
    fill(255)
    
  )
  rect(0,height/2,width/2,height/2);

  
  // quad 4
  if (mouseX > width/2 && mouseX < width && mouseY > height/2 && mouseY < height){
    fill(0);
    fadeOut = false;
  }
  else{
    fill(255);
  }
  rect(width/2,height/2,width/2,height/2);
  
}
