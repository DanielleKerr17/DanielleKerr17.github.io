// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
//-------------------------------------------------------------------------------------------------------

function setup() {
  createCanvas(4500, 3000);
//createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

}

function draw() {
  background(0);
  triangle1();
  triangle2();
    
}

function keyPressed(){
  if (key === ""){
    save(); 
  }
}

//---------------------------------------------------------------------------------------------------------------------

function triangle1(){
  rectMode(CENTER);
  translate(width/2,height *0.8);
  for(let i = 0; i < 15; i ++){
    
      push();
      translate(0, i * -50);
      rotate((i*10));
      fill(225, 0, 100 , map(i, 0, 10, 70, 0 ));    //changes what we can do with the for loop and variable
      stroke(170);
      strokeWeight(0.3);
      triangle(-100, 100, 0, -100, 100, 100);
      pop();

    
  }
  pop();
}

function triangle2(){
  rectMode(CENTER);
  translate(width/2,height *0.8);
  for(let i = 0; i < 15; i ++){
    
      push();
      translate(0, i * -70);
      rotate((i*10));
      fill(225, 0, 100 , map(i, 0, 10, 70, 0 ));    //changes what we can do with the for loop and variable
      stroke(170);
      strokeWeight(0.5);
      triangle(-100, 100, 0, -100, 100, 100);
      pop();

    
  }
  pop();
}


