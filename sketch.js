var bg, backgroundImg;

function preload() {
  backgroundImage = loadImage("images/bg.jpg");
  ironImage = loadImage("images/iron.png");
  }

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImage);
  bg.scale =2;
 
  ironMan = createSprite(57, 505, 20, 50);
  ironMan.addImage("running", ironImage);
  ironMan.scale = 0.3;
  
}

function draw() {

  if (keyDown("up")) {
    ironMan.velocityY = -8;
  }
  if (keyDown("left")) {
    ironMan.x = ironMan.x - 4;
  }
  if (keyDown("right")) {
    ironMan.x = ironMan.x + 4;
  }
  ironMan.velocityY = ironMan.velocityY + 0.4;

    drawSprites();
   
}
