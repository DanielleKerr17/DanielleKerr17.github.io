// objects demo
// Dani
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
//let Walkers = [];
const NUM_WALKERS = 1000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for( let i = 0; i < NUM_WALKERS; i ++){
    Walkers.push(new Walker(random(width), random(height)));
  }

}


class Walker{
  // constructor and class prperties
  constructor(x_, y_){
    this.x = x_;
    this.y = y_;
    this.c = color(random(100),random(100), random(50));
    this.speed = 10;
    this.size = 15;

  }
 // Class methods
  display(){
    rectMode(CENTER);
    fill(this.c);
    rect(this.x, this.y, this.size, this.size);
    noStroke();
}

move(){
  let myChoice = Math.floor(random(4));
  if (myChoice === 0){
    this.x += this.speed;
  }
  else if (myChoice === 1){
    this.x -= this.speed;
  }
  else if (myChoice === 2){
    this.y += this.speed;
  }
  else{
    this.y -= this.speed;
  }
}
}

function draw() {
  for(let i = 0; i < NUM_WALKERS; i ++){
    Walkers[i].move();
    Walkers[i].display();
  }
}