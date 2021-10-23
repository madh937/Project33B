const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var backgroundImg,engine,world;
var maxsnow = 20;
var snow=[]

function preload(){
backgroundImg = loadImage("snow3.jpg");
}




function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world = engine.world;
  //snow = new Snow(390,100,30,30);
if(frameCount%500 === 0){
for(var i = 0;i<maxsnow; i++){
snow.push(new Snow(random(0,800),random(0,400),100,100))
  }
 }
}

function draw() {
  background(backgroundImg); 
  Engine.update(engine);
 // snow.display();
 for(var i = 0;i<maxsnow;i++){
  snow[i].display();
 }
  drawSprites();

}