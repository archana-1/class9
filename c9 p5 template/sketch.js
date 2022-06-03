
var box;
var edges
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
  box.shapeColor = "red"
  console.log(box)
  edges = createEdgeSprites()
}

function draw() 
{
  background(30);

 /* if(keyIsDown(RIGHT_ARROW)){
    box.position.x += 5 
  }

  if(keyIsDown(LEFT_ARROW)){
    box.position.x -= 5 
  }
  box.bounceOff(edges)*/
  drawSprites();

}




