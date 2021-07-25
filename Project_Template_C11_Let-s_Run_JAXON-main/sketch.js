var path, invisiblePath ,pathImage;
var Runner, Runner_running;

function preload(){
  //pre-load images
  pathImage = loadImage("path.png");
  Runner_running = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200,400,20);
  path.addImage("path",pathImage);
  path.velocityY = 6;
  path.scale=1.2;
  Runner = createSprite(200,150,400,400);
  Runner.addAnimation("Runner",Runner_running);
  Runner.scale=0.07;
  if(Runner.x<60)
  {
    Runner.x = 60
  }
  if(Runner.x<340)
  {
    Runner.x = 340
  }
  invisiblePath = createSprite(10,190,400,10);
 invisiblePath.visible = false;
 invisiblePath = createSprite(390,190,400,10);
 invisiblePath.visible = false;
}

function draw() {
  background(0);
 if(path.y > 400){
   path.y = height/2;
 }
  createEdgeSprites();
 drawSprites();
}
