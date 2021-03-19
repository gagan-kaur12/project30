const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world, engine;

var ground, stand1, stand2;
var b1,b2,b3,b4,b5,b6,b7;
var polygon, polygonImg;
var sling;

function preload(){
    polygonImg = loadImage("polygon.png");
}

function setup(){
engine = Engine.create();
world= engine.world;

createCanvas(1200,600);
ground = new Ground(width/2,600,width,30);

stand1 = new Ground(380,450,300,20);
stand2 = new Ground(880,230,270,20);


     b1 = new Box(260,410,30,40);
     b2 = new Box(290,410,30,40);
     b3 = new Box(320,410,30,40);
     b4 = new Box(350,410,30,40);
     b5 = new Box(380,410,30,40);
     b6 = new Box(410,410,30,40);
     b7 = new Box(440,410,30,40);
     b8 = new Box(470,410,30,40);
     b9 = new Box(500,410,30,40);

     // 2layer
     b10 = new Box(280,370,30,40); 
     b11 = new Box(310,370,30,40); 
     b12 = new Box(340,370,30,40); 
     b13 = new Box(370,370,30,40); 
     b14 = new Box(400,370,30,40); 
     b15 = new Box(430,370,30,40); 
    b16 = new Box(460,370,30,40);

    // 3 layer
    b17 = new Box(340,340,30,40); 
    b18 = new Box(370,340,30,40); 
    b19 = new Box(400,340,30,40); 

    // 4 layer

    b20 = new Box(370,310,30,40);
// 2nd pyramid

    ba1 = new Box(780,190,30,40);
    ba2 = new Box(810,190,30,40);
    ba3 = new Box(840,190,30,40);
    ba4 = new Box(870,190,30,40);
    ba5 = new Box(900,190,30,40);
    ba6 = new Box(930,190,30,40);
    ba7 = new Box(960,190,30,40);
    ba8 = new Box(990,190,30,40);
   

    // 2layer
   ba10 = new Box(810,150,30,40); 
    ba11 = new Box(840,150,30,40); 
    ba12 = new Box(870,150,30,40); 
    ba13 = new Box(900,150,30,40); 
    ba14 = new Box(930,150,30,40); 
    ba15 = new Box(960,150,30,40); 
   ba16 = new Box(990,150,30,40);

   // 3 layer
   ba17 = new Box(850,110,30,40); 
   ba18 = new Box(880,110,30,40); 
   ba19 = new Box(910,110,30,40); 

   // 4 layer

   ba20 = new Box(870,70,30,40); 

   polygon = Bodies.circle(50,200,20);
   World.add(world,polygon);

   sling = new SlingShot(this.polygon,{x:100,y:200});

Engine.run(engine);
}

function draw(){
    background(25);
    push();
    textSize(25);
    strokeWeight(3)
    stroke("red");
    text("Press Space to get a second Chance to Play!!",50 ,50);
     pop();
    ground.display();
    stand1.display();
    stand2.display();
 
    fill("lightblue");
    
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();

    fill("pink");
    b16.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();

   fill("lightgreen")
   b17.display();
   b18.display();
   b19.display();

   fill("yellow")
   b20.display();

  
   fill("lightblue");
    
   ba1.display();
   ba2.display();
   ba3.display();
   ba4.display();
   ba5.display();
   ba6.display();
   ba7.display();
   ba8.display();

   fill("pink");
  // ba16.display();
   ba10.display();
   ba11.display();
   ba12.display();
   ba13.display();
   ba14.display();
   ba15.display();

   fill("lightgreen")
   ba17.display();
   ba18.display();
   ba19.display();

   fill("yellow")
   ba20.display();
  
   push();
    imageMode(CENTER);
   image(polygonImg,polygon.position.x,polygon.position.y,40,40);
 //polygon.display();
 pop();
 sling.display();
}
function mouseReleased(){
    sling.fly();
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{
        x:mouseX,y:mouseY
    });
}
function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(this.polygon, {x:100, y:200}) 
	  sling.attach(this.polygon);
	}
  }