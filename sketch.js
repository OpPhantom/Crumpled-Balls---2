const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball,box1,box2,box3,dustbin,dustbinImage;
function preload()
{
	dustbin = createSprite(1100,380,120,103);
	dustbinImage = loadImage("sprites/dustbin.png");
}

function setup() {
	createCanvas(1350,700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	dustbin.addImage(dustbinImage);
	dustbin.scale = 0.4;

	//Create the Bodies Here.
	ground = new G(700,550,1400,200);
	ball = new Ball(150,350,25);
	box1 = new Box(1100,445,100,10);
	box2 = new Box(1050,420,5,120);
	box3 = new Box(1150,420,5,120);
  
}


function draw() {
  background("white");
  Engine.update(engine);
  
  ground.display();
  ball.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball.body,ball.body.position,{x:150,y:-125});

  
	}
}