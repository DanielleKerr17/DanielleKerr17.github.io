// Primitive Paint
// Danielle Kerr
// 2/14/2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x,y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth / 2;
  y = windowHeight / 2;
}

function draw() {
  objectMove();
  keyTyped();
  word();

}

function keyTyped() {     // adds shapes
  if (key === 'a' && keyIsPressed) {
    fill(random(255), random(255), random(255));   //color switching 
    rect(mouseX, mouseY, 50, 50);


  }
  if (key === 's' && keyIsPressed) {
    fill(random(255), random(255), random(255));
    ellipse(mouseX, mouseY, 50, 50);


  }
  if (key === 'd' && keyIsPressed) {
    fill(random(255), random(255), random(255));
    triangle(mouseX, mouseY, (mouseX + 50), mouseY, mouseX, (mouseY + 50));

  }
  if (key === " "){   //clears page
    clear();
  }
}

function word(){          //typography 
  textFont('Georgia');
  fill(207,8,255);
  textSize(16);
  text('Danielle Kerr', windowWidth * 0.8,windowHeight * 0.9);

}

function objectMove(){   //Autonomous Art 
  ellipse(x,y, 20,20);
  x += random(-20, 20);
  y += random(-20,20);
}

