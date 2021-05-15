var grid = 50;
var width = 1366;
var carGroup1,logGroup1;

var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
function preload()
{
 
}

function setup() {
  createCanvas(1366,700);
  carGroup1 = new Group();
  logGroup1 = new Group();

  for(var i = 0;i<6;i++){
    var bottomGrass1 = createSprite(width/2,height-50-(i*400),width,grassHeight)
    if(i%2===0)
    {
      var road= createSprite(width/2,height-150-(i*400)-grassHeight,width,300)
      road.shapeColor="black"
    }
    bottomGrass1.shapeColor="green"
  }

  for(i = 0;i < 40; i++){
    cars=new Car(2);
    carGroup1.add(cars.spt)
  }
  for(i = 0;i < 40; i++){
    logs=new Log(2);
    logGroup1.add(logs.spt)
  }
  for(i = 1;i<logGroup1.length;i++){
    if(logGroup1[i].x<0)
    {
      logGroup1[i].x=width
    }
  }
 }

function draw() {
  background("skyblue");

  //player1 = new Player(width/2,height/2,grid)
  //keyPressed()

   // translate(0,-player1.spt.y+height-150)


  drawSprites();
}



function keyPressed(){
  if(keyCode == UP_ARROW){
    player1.move(0,-2)
  } else if (keyCode == DOWN_ARROW){
    player1.move(0,-2)
  } else if(keyCode == LEFT_ARROW){
    player1.move(-2,0)
  } else if(keyCode == RIGHT_ARROW){
    player1.move(2,0)
  }
}