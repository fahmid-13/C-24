
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//var planeImg, rubberImg, hammerImg;
var plane, hammer, rubber, stone, sand, iron;

function preload(){
	//planeImg = addImage(Airplane.png);
	//rubberImg = addImage(rubber.jpg);
	//hammerImg = addImage(Hammer2.png);
}

function setup() {
	createCanvas(900, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	plane = new Plane(50, 110);

	hammer = new Hammer(200, 290);

	rubber = new Rubber(450, 540);

	stone = new Stone(390, 370);

	sand = new Sand(450, 699);

	iron = new Iron(450, 660);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  
  drawSprites();
 
	plane.display();
	hammer.display();
	rubber.display();
	stone.display();
	sand.display();
	iron.display();
}



