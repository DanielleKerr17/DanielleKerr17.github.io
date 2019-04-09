// refactoring 4
// Danielle
// 04/04/19
//
let fillColor = 0; 
let fillColorOpp = 0;

function setup() {
  createCanvas(600, 600);
 }


  function draw() {
  drawCheckers();
  
  }



function drawCheckers(){
let columnY = 0; 
  for (let x = 0; x< 526; x += 75){
    for (let y = 0; y < 526; y += 75){
      //let y = columnY;
      rect(x,y,75,75); 
      fill(fillColor);
      if (fillColor === 0){
        fillColor = 255;
      }
      else{
        fillColor = 0;
      }
    }
    fillColor = 255;
    fill(fillColorOpp);
  }


  // rect(COLUMN_1,columnY,75,75);
  // fill(BLACK_S);


  // rect(COLUMN_1,columnY,75,75);
  // fill(WHITE_S);


  // rect(COLUMN_1,columnY,75,75);
  // fill(BLACK_S);


  // rect(COLUMN_1,columnY,75,75);
  // fill(WHITE_S);


  //  rect(COLUMN_1,columnY,75,75);
  //  fill(BLACK_S);


  //  rect(COLUMN_1,columnY,75,75);
  //  fill(WHITE_S);

  //  rect(COLUMN_1,columnY,75,75);
  //  fill(BLACK_S);

  
  // rect(COLUMN_1,columnY,75,75);
  // fill(BLACK_S);

  // colum 2
  rect(75,0,75,75);
  fill(WHITE_S);


  rect(75,75,75,75);
  fill(BLACK_S);


  rect(75,150,75,75);
  fill(WHITE_S);


  rect(75,225,75,75);
  fill(BLACK_S);


  rect(75,300,75,75);
  fill(WHITE_S);


  rect(75,375,75,75);
  fill(BLACK_S);


  rect(75,450,75,75);
  fill(WHITE_S);


  rect(75,525,75,75);
  fill(WHITE_S);

  //3

  rect(150,0,75,75);
  fill(BLACK_S);

  rect(150,75,75,75);
  fill(WHITE_S);
  
  rect(150,150,75,75);
  fill(BLACK_S);


  rect(150,225,75,75);
  fill(WHITE_S);


  rect(150,300,75,75);
  fill(BLACK_S);


  rect(150,375,75,75);
  fill(WHITE_S);


  rect(150,450,75,75);
  fill(BLACK_S);


  rect(150,525,75,75);
  fill(BLACK_S);

  //4

  rect(225,0,75,75);
  fill(WHITE_S);


  rect(225,75,75,75);
  fill(BLACK_S);


  rect(225,150,75,75);
  fill(WHITE_S);


  rect(225,225,75,75);
  fill(BLACK_S);


  rect(225,300,75,75);
  fill(WHITE_S);


  rect(225,375,75,75);
  fill(BLACK_S);

  
  rect(225,450,75,75);
  fill(WHITE_S);


  
  rect(225,525,75,75);
  fill(WHITE_S);

  //5 
  rect(300,0,75,75);
  fill(BLACK_S);


  rect(300,75,75,75);
  fill(WHITE_S);


  rect(300,150,75,75);
  fill(BLACK_S);


  rect(300,225,75,75);
  fill(WHITE_S);


  rect(300,300,75,75);
  fill(BLACK_S);


  rect(300,375,75,75);
  fill(WHITE_S);


  rect(300,450,75,75);
  fill(BLACK_S);

 
  rect(300,525,75,75);
  fill(BLACK_S);
 
  //6

  rect(375,0,75,75);
  fill(WHITE_S);


  rect(375,75,75,75);
  fill(BLACK_S);


  rect(375,150,75,75);
  fill(WHITE_S);


  rect(375,225,75,75);
  fill(BLACK_S);


  rect(375,300,75,75);
  fill(WHITE_S);


  rect(375,375,75,75);
  fill(BLACK_S);


  rect(375,450,75,75);
  fill(WHITE_S);


  rect(375,525,75,75);
  fill(WHITE_S);

  //7

  rect(450,0,75,75);
  fill(BLACK_S);


  rect(450,75,75,75);
  fill(WHITE_S);


  rect(450,150,75,75);
  fill(BLACK_S);


  rect(450,225,75,75);
  fill(WHITE_S);


  rect(450,300,75,75);
  fill(BLACK_S);


  rect(450,375,75,75);
  fill(WHITE_S);


  rect(450,450,75,75);
  fill(BLACK_S);

  rect(450,525,75,75);
  fill(BLACK_S);

// 8

  rect(525,0,75,75);
  fill(WHITE_S);


  rect(525,75,75,75);
  fill(BLACK_S);


  rect(525,150,75,75);
  fill(WHITE_S);


  rect(525,225,75,75);
  fill(BLACK_S);


  rect(525,300,75,75);
  fill(WHITE_S);


  rect(525,375,75,75);
  fill(BLACK_S);


  rect(525,450,75,75);
  fill(WHITE_S);

}