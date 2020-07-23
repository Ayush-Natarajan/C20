var box1, box2



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  box1 = createSprite(200,300,50,50)
  box1.shapeColor = "blue"
  box2 = createSprite(130, 350, 50, 50)
  box2.shapeColor = "red"
}

function draw() {
  background(100,100,100);  
  box1.x = World.mouseX
  box1.y = World.mouseY

if (box1.x-box2.x < box1.width/2 + box2.width/2 &&
  box2.x-box1.x < box1.width/2 + box2.width/2 &&
  box1.y-box2.y < box2.height/2 + box1.height/2 &&
  box2.y-box1.y < box2.height/2 + box1.height/2) {
  box1.shapeColor = "green"
  box2.shapeColor = "green"
}
  else {
    box1.shapeColor = "blue"
    box2.shapeColor = "red"
}

  drawSprites();
}