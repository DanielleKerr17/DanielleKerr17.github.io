// refactoring 3
// Dan 
// 4/4/19
//


  ``
const MINUS_NUM = 40;   /// makes the circles smaller everytime
const xPosition = 200;   // where the circle sits on the x 
const yPosition = 200;   // where the circle sits on the y

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipseMaker();
  }

//------------------------------------------------MAKES THE CIRCLE

function ellipseMaker(){
  let xSize = 400;          //the x cordinate in the largest circle
  let ySize = 400;          // the y cordinate in the largest circle

  for (let i = 0; i < 11; i ++){
    ellipse(xPosition, yPosition, xSize, ySize);   //draws the biggest circle
    xSize -= MINUS_NUM;    //makes the circle smaller by the const Minus_num in the x  
    ySize -= MINUS_NUM;    //makes the circle smaller by the const Minus_num in the y

  }

}