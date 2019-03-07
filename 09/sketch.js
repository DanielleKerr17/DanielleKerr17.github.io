// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let slider1;
let slider2;
let slider3;
let radio;

function setup() {
  createCanvas(windowWidth, windowHeight);
  createSliders();
  createRadios();

}

function createSliders(){
  //slider one
  slider1 = createSlider(0,255,120);
  slider1.position(40,600);
  slider1.style('width', '80px');
  //slider two
  slider2 = createSlider(0,255,160);
  slider2.position(40,650);
  slider2.style('width', '80px');
  //slider three
  slider3 = createSlider(0,255,200);
  slider3.position(40,700);
  slider3.style('width', '80px');
}
function createRadios(){
 radio = createRadio();
 radio.option("circle");
 radio.option("square");
 radio.style('width', '200px');
 radio.position(250,50);
 textAlign(CENTER);
 fill(255,0,0);
}

function colorPicker(){
  scolor = createColorPicker(0)
}

function draw() {
  background(slider1.value(), slider2.value(), slider3.value());
  //slider one
  textSize(20);
  text("R:", 10, 610);
  //slider two
  textSize(20);
  text("G:", 10, 670);
  //slider three
  textSize(20);
  text("B:", 10, 720);

  if (radio.value() === "circle"){
    ellipse(width/2, height/2, 200,200);
  }
  if (radio.value() === "square"){
    rect(width/2, height/2 , 200,200);
  }
  
}
