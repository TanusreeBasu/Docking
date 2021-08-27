var backImg

function preload(){
backImg = loadImage("images/spacebg.jpg")

}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(backImg);  
  drawSprites();
}