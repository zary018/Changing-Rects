var fixedRect, movingRect;


function setup() {
  createCanvas(1200,800);
  
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background("black");  
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //console.log(movingRect.x - fixedRect.x);
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
      && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
      && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
      && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  } else {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  

  
  drawSprites();
}