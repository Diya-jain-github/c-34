const Engine = Matter.Engine;
const World  = Matter.World ;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1 , box2 ,box3 ,box4 ,box5 ,box6 ,box7 ,box8 ,box9 ,box10 ,box11 ,box12 ,box13 ,box14 ;
var rope , ball ;
var ground;

function setup(){
  createCanvas(3000,800);
  engine = Engine.create();
  world  = engine.world   ;

  ground = new Ground (600,600,1200,20);

  box1 = new Box (900,100,70,70);
  box6 = new Box (800,100,70,70);
  box11= new Box (700,100,70,70);

}

function draw(){
background(180);
Engine.update(engine);

ground.display();
box1.display();
box6.display();
box11.display();
}