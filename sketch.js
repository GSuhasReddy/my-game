var ground,soldier,hostages;

function setup(){
    var canvas = createCanvas(1200,400);
    ground = createSprite(300,380,1800,20);
    soldier = createSprite(20,375,40,30);
    
}

function draw(){
background("black");
spawnHostages();
  drawSprites();
}
function spawnHostages(){
if(frameCount%100===0){
    hostages = createSprite(1200,375,40,30);;
    hostages.velocityX=-10;
}
};