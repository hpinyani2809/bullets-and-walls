var car,wall
var speed,weight 
var wall,thickness;
var bullet,speed,weight
function setup() {
  createCanvas(800,400);
  speed= random(223,321)
  thickness=random(22,83)
  weight=random(30,52)
  car=createSprite(50, 200, 50, 50);
wall=createSprite(1200,200,thickness,height/2)
car.velocityX=speed;
car.shapeColor="blue";
wall.shapeColor="yellow";
}

function draw() {
  background(0);
    if(hasCollided(car,wall)
    {
      car.velocityX=0;
      var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);
      if(deformation>10)
      {
      car.shapeColor=color(255,0,0);
    
    }
    
    if(deformation<10)
    {
      car.shapeColor=color(0,255,0)
    }
  }
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;
}
function(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10)
  {
    wall.shapeColor=color(225,0,0);
  }
  if(damage<10)
  {
    wall.shapeColor=color(0,225,0)
  }
}
