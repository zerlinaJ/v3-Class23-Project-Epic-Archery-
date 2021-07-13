const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(400, random(450, height - 300), 180, 150);
  player = new Player(385, playerBase.body.position.y - 153, 50, 180);


  computerBase = new ComputerBase(width - 400, random(450, height - 300),180,150);
  computer = new Computer(width - 380,computerBase.body.position.y - 153,50,180);
}

function draw() {
  background("aliceblue");

  Engine.update(engine);

  // Title
  fill("darkblue");
  textAlign("center");
  textSize(40);
  text("Epic Archery", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  

}
