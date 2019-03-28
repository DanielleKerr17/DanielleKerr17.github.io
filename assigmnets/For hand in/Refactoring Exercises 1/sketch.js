// Refactoring Exercises 1
// Danielle
// 03/28/2019

let speedX,speedY, rectX, rectY;

//----------------------------------------------------------------------------------------------------------------------------------


function setup(){
	createCanvas(windowWidth, windowHeight);
  speedX =60; speedY =60;                        //SpeedX and SpeedY decide the rectangles speed going vertically and horizontally
  rectY =random(3,8); rectX =random(3,8); 
                                                 //rectX and rectY make the rectangle move at random vertial and horizontal points
}

//----------------------------------------------------------------------------------------------------------------------------------


function draw() {
	rectBounce();
	background(80,80,80);
	rect(speedX , speedY ,250,75);                //creates the rectangle
}

//----------------------------------------------------------------------------------------------------------------------------------

function rectBounce(){   
                                               //the function that makes sure the rectangle doesnt slide off the screen
  speedX += rectY; 
  speedY += rectX;
	if (speedY>=height-75|| speedY <=0){         //represents the horizontal edges on the screen
		rectX = rectX *-1;                         //ensures the rectangle stays on the screen vertically
	}
	if (speedX>=width-250|| speedX <=0){        //represents the vertical edges on the screen creating a wall
		rectY = rectY *-1;                        //ensures the rectangle stays on the screen horizontally
	}
}