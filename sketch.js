

var img1;
var img2;
var img3;

function preload() {
  img1= loadImage("heart.png");
  img2= loadImage("rock.png");
  img3= loadImage("help.jpg");

}



function setup() {
  createCanvas(500, 500);
  
}

function draw() {

  imageMode(CORNER);
  image(img2, 0, 0);
  imageMode(CENTER);
    image(img1, mouseX, mouseY);

  if (mouseIsPressed) {
    imageMode(CORNER);
    image(img3, 0, 0);


  }

}