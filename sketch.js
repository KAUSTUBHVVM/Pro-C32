const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
  getBackgroundImg();
  
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    


    Engine.update(engine);

    // write code to display time in correct format here
    
    
}

async function getBackgroundImg(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(hour);

  if(hour>=06 && hour<=19){
    bg = "sunrise1.png";
}
else{
    bg = "sunset12.png";
}

backgroundImg = loadImage(bg);
console.log(backgroundImg);

}
