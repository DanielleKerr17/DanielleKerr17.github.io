// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
const COLUMNS = 5;
const ROWS = 5;
const TILE_SIZE = 100;
let playX = 3;
let playY = 4;

let tiles = [];  //0=blank, 1=chick, 2=cow
let level = [ [0,1,0,1,0],
              [1,1,1,0,0],
              [0,0,1,1,0],
              [1,0,0,1,1],
              [0,0,1,2,1] ];
function preload(){
  for (i = 0; i < 3; i++){
    tiles.push(loadImage("assets/" + i +".png"));
  }
}

function setup() {
  createCanvas(COLUMNS * TILE_SIZE ,ROWS * TILE_SIZE );
}

function renderGame(){
  for (let y= 0; y< ROWS; y++){
    for (let x = 0; x < COLUMNS; x++){
      let index = level[y][x];
      image(tiles[index], x* TILE_SIZE, y *TILE_SIZE);
    }
  }

}

function keyPressed(){
  if (keyCode === LEFT_ARROW){
    swap(playX, playY, playX - 1, playY);
      playX --;
    }

  if (keyCode === RIGHT_ARROW){
    swap(playX, playY, playX + 1, playY);
      playX ++;
    }

  if (keyCode === UP_ARROW){
    swap(playX, playY, playX , playY - 1);
      playY --;
    }
  
  if (keyCode === DOWN_ARROW){
    swap(playX, playY, playX , playY + 1);
      playY ++;
    }
  }
  

function swap(x1, y1, x2,y2){
  let temp = level[y1][x1]
  level[y1][x1] = level [y2][x2];
  level [y2][x2] = temp;

}

function draw() {
  background(220);
  renderGame();
}


