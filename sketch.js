
function preload(){
  groundImage=loadImage("road.png")
}
function setup() {
  createCanvas(700,500);
 ground=createSprite(500, 200, 2000,500);
 ground.addImage(groundImage)
 ground.x=width/2
 ground.velocityX=-2
}

function draw() {
  background("grey");  
  if(ground.x<0){
    ground.x=width/2
  }
  drawSprites();
}