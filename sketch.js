var fixedRec,movingRec;
function setup() {
  createCanvas(800,400);
  fixedRec=createSprite(100, 200, 50, 50);
  fixedRec.shapeColor="blue";
  movingRec=createSprite(300,300,40,80);
  movingRec.shapeColor="blue";
}

function draw() {
  background(0);  

  movingRec.x=World.mouseX;
  movingRec.y=World.mouseY;

if(movingRec.x-fixedRec.x<fixedRec.width/2+movingRec.width/2
  &&fixedRec.x-movingRec.x<fixedRec.width/2+movingRec.width/2
  &&movingRec.y-fixedRec.y<fixedRec.height/2+movingRec.height/2
  &&fixedRec.y-movingRec.y<fixedRec.height/2+movingRec.height/2){
movingRec.shapeColor="green";
fixedRec.shapeColor="green";

  }
else{
  fixedRec.shapeColor="blue";
  movingRec.shapeColor="blue";
}
  drawSprites();
}