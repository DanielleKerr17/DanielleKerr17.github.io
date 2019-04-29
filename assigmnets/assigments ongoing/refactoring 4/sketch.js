// refactoring 4
// Danielle
// 04/04/19
//
let fillColor = 0; 

function setup() {
  createCanvas(600, 600);
 }

 //----------------------------------------------------------------------------------------------

  function draw() {
  drawCheckers();
  
  }

//-------------------------------------------------------------------------------------

function drawCheckers(){
let columnY = 0; 
  for (let x = 0; x< 526; x += 75){           //rows
    for (let y = 0; y < 526; y += 75){        //columns
      if (fillColor === 0){
        fillColor = 255;
      }
      else{
        fillColor = 0;
      }
      fill(fillColor);
      rect(x,y,75,75);                //draws rectangles
    }
    if (fillColor === 0){             //one more before the loop to resart the columns 
      fillColor = 255;
    }
    else{
      fillColor = 0;
    }

  }
}