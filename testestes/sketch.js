// Rollovers
// Danielle Kerr
// 2/26/2019
//
// Extra for Experts:
// - I was FINALLY able to change the color in the extra for experts challege, although i couldnt figure out how to filll the whole screen with black with the time i had.

let quad;
let colorI = 255;   //stays the same, constant 1 #
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


function quadInfo(){
   //quad 2             FADE OUT
   if (quad == 2){
    colorII = 0;
  }
  else{
    colorII += 5;
  }
  fill(colorII, 255 ,255);              //changes color
  rect(0,0,width/2,height/2);



  // quad 1         FADE OUT
  if (quad == 1){
    colorI = 0; 
  }
  else {
    colorI += 5;
  }
  fill(255, 255 ,colorI);                 //changes color
  rect(width/2,0,width/2,height/2);



  //quad 3         FADE OUT
  if (quad == 3){
    colorIII = 0;

  }
  else{
    colorIII += 5;
}
  fill(255, colorIII ,255);             //changes color
  rect(0,height/2,width/2,height/2);



  // quad 4         FADE OUT
  if (quad == 4){
    colorIV = 0;
  }
  else{
    colorIV += 5;
  }
  fill(colorIV, 255 ,colorIV);                //changes color
  rect(width/2,height/2,width/2,height/2);
}

function draw() {
  background(255);
  determineQuad();
  quadInfo();
}
