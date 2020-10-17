var bullet,wall,thickness;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  
  //creating speed and weight
  speed = random(223,321);
  weight = random(30,52);

  //creating thickness
  thickness = random(22,83);

  //creating bullet
  bullet = createSprite(50,200,100,20);
  bullet.velocityX = speed;

  //creating wall
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);

}

function draw() {
  background(0);  

  //creating algorithm
  if(hasCollided(wall,bullet)){
    bullet.velocityX = 0;
    
    //creating damage
    var damage = 0.5 * weight * speed * speed / 22500;

    //danger bullet
    if(damage < 180 && damage > 100){
      wall.shapeColor = color(255,0,0);
    }

    //safe bullet
    if(damage < 100){
      wall.shapeColor = color(0,255,0);
    }

  }

  drawSprites();
}

//hasCollided function
function hasCollided(object1,object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2){
    return true;
  }
  else{
    return false;
  }

}