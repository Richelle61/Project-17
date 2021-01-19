
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var gameState="play"

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  backgroundImage=loadImage("forest.jfif")
}



function setup() {
  createCanvas(400,400)
  //creating monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;
  console.log(ground.x)
  foodGroup=new Group();
  obstacleGroup = new Group();
}


function draw() {
  background(backgroundImage)
  text("score "+score,200,20)
  if(gameState==="play"){
if(monkey.isTouching(obstacleGroup))  {
 monkey.scale=0.08;
  
}
  
 if(monkey.isTouching(foodGroup)) {
   foodGroup.destroyEach();
   score=score+2
 }
switch(score){
        case 10: monkey.scale=0.12;
                break;
        case 20: monkey.scale=0.14;
                break;
        case 30: monkey.scale=0.16;
                break;
        case 40: monkey.scale=0.18;
                break;
        default: break;
    }  
 if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12 ;
  }
  
  
  monkey.velocityY = monkey.velocityY + 0.8 ;
  
  monkey.collide(ground);
  
  banana();
  obstacle();
  }
  if(gameState==="End"){
    monkey.velocityY=0
    obstacleGroup.setVelocityXEach (0)
  }
  drawSprites();
}

  
 function banana(){
   if(frameCount% 80===0){
     var banana = createSprite(90,130,10,5)
     banana.velocityX = -3 ;
     banana.addImage(bananaImage);
     banana.setLifetime = 100
     banana.scale =0.1
     foodGroup.add(banana);
   }
 }

function obstacle(){
   if(frameCount% 80===0){
     var obstacle = createSprite(400,335,25,20)
     obstacle.velocityX = -3 ;
     obstacle.addImage(obstacleImage);
     obstacle.setLifetime = 100
     obstacle.scale =0.1
     obstacleGroup.add(obstacle);
   }
 }


