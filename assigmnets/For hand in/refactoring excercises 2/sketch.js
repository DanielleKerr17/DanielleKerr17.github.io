// refactoring 2
// Danielle kerr
// 04/09/2019
//


function setup(){
  createCanvas(480, 270);
}

//--------------------------------------------------------------------------------------------------------------------

function draw(){
  background(255);
  createBoxes();
  undecidedD();
}

//--------------------------------------------------------------------------------------------------------------------

function createBoxes(){
  stroke(0);                                      //for the outline of the boxes
  line(240, 0, 240, 270);                         //creates the vertical line to sepperate the boxes
  line(0, 135, 480, 135);                         //creates the horizontal line to sepperate the boxes
  fill(0);                                        //creates the box
} 

//--------------------------------------------------------------------------------------------------------------------

function undecidedD(){
  if (mouseX < width/2 && mouseY < height/2){
    rect(0,0, width/2, height/2);                 //creates the box in the proper corner of the screen
  }
  else if (mouseX> width/2 &&mouseY<135){
    rect(240,0, width/2 , height/2);
  }
  else if (mouseX< width/2 &&mouseY>135){
    rect(0,135, width/2 ,height/2);
  }
  else if (mouseX> width/2 &&mouseY>135){
    rect(240,135, width/2 , height/2 );
  }

}