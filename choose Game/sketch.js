var bg;
var tunnel;
function preload() 
{
  player_img=loadAnimation("image/one.png")
  player_img1=loadAnimation("image/two.png");
  bg=loadImage("images/Background.png");
  tunnel =loadImage("images/tunnel2.png");
  tree=loadImage("images/Tile_34.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  player=createSprite(500,100);
  player.addAnimation("one",player_img);
  player.addAnimation("two",player_img1);
  player.scale=2;
  player.velocityY=2;
}

function draw() {
  background("black");
  //image(tree,100,250);
 // image(tunnel,displayWidth-500,100,200,600)
 if (keyWentDown("UP_ARROW")) {
 
    
  player.changeAnimation("two");
  
 }
 player.x=mouseX;
 player.y=mouseY;

  drawSprites();
}
function spawnTools()
 {
   
   var tools =createSprite(random(100,800),10,50,50);
   
  tools.velocityX=2;
   
 }
 