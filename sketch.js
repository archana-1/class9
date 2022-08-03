
var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,20,20) //play.js
  box.shapeColor = "red"
  console.log(box)
  
  
}

function draw() 
{

  background(255,255,0); // 0-255 0 black 255 white
  if(keyDown(RIGHT_ARROW)){
    box.x1 +=5
  }
  drawSprites()
  
}




