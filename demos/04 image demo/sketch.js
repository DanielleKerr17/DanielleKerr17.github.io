// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let img;

let imgSize;

function preload(){
  img = loadImage("assets/gear.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  imgSize = 200;

}

function draw() {
  background(220);
  for(i = 0; 1<imgArray.Length; i++){
  image(img, imgArray[i][0], imgArray[i][1], imgArray[i][2], imgArray[i][2])
  }
   image(img, mouseX, mouseY, imgSize, imgSize);
   
}
function keyTyped(){
  if (key === 'a'){
    fill(random(255), random(255), random(255));
    rect(nouseX, mouseY, 50,50);
  }
  if (key === 's'){
    fill(random(255), random(255), random(255));
    ellipse(mouseX, mouseY, 50,50);
  }
  if (key === 'd'){
    triangle(mouseX, mouseY, mouseX, (mouseY + 50)(mouseX + 50) mouseY);
  }
}

function mousePressed(){
  let cur = []
}
)

function mouseWheel(event){
  if (event.delta >0 ){
    imgSize += 25;
  }
  else{
    if (imgSize > 25){
      imgSize -= 25;
    }
  }
  return false;
}