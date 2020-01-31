const  Engine = Matter.Engine;
const  Render = Matter.Render;
const  World = Matter.World;
const  Bodies = Matter.Bodies;

var engine, world;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  
  player = new Player(100,100,10,50);
  ground = new Ground(400,400,800,10); 
 
}

function draw() {
  background(255,255,255); 

  Engine.update(engine);
  
  function keyPressed(){
    if(keyCode === "UP_ARROW"){
      player.velocityY = -2;
    }
  }
  ground.display();
  player.display();
  

  drawSprites();
}