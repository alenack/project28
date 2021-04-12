
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stoneObj,groundObject, sling;
var mango1,mango2,mango3,mango4,mango5;
var world,boy;
var boy,boyimg;
//var tree,treeimg;

function preload(){
	boyimg = loadImage("sprites/boy.png");
	treeimg = loadImage("sprites/tree.png");
  }

function setup() {
createCanvas(1370, 610); 
engine = Engine.create();
world = engine.world;

   /* boy = createSprite(200, 530, 30, 100);
	boy.addImage("boy",boyimg);
	boy.scale = 0.1;
	tree = createSprite(890,300,30,40);
	tree.addImage(treeimg);
	tree.scale = 0.5;*/
    stoneObj=new Stone(235,420,30); 
    mango1 = new Mango(800,250,50,50);
	mango2 = new Mango(800,100,50,50);
	mango3 = new Mango(1000,220,50,50);
	mango4 = new Mango(1000,100,50,50);
	mango5 = new Mango(900,150,50,50);
	
	


//treeObj=new Tree(1050,580);
groundObject=new Ground(width/2,600,width,20);
sling=new Slingshot(stoneObj.body,{x:280,y:420})  

Engine.run(engine);
 
}

function draw() {

  background("lavender");
  textSize(30);
  fill('purple');
  text("Press Space to get another stone to Play",50 ,50);
 push();
 imageMode(CENTER);
 image(boyimg,350,500,250,350);
 image(treeimg,880,310,600,600);
 pop();
  

  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  groundObject.display();
  sling.display();

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased(){
	sling.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  sling.attach(stoneObj.body);
	}
}

  function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if (distance<=lmango.r+lstone.r)
 {
   Matter.Body.setStatic(lmango.body , false);
 } 
}



