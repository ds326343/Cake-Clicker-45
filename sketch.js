var cake 
var money
var moneyPerClick 
var moneyPerSecond
var cost 
var costScaleFactor
var distanceToCake
var M = 1000000
var B = 1000000000
var T = 100000000000000

money = 0;
moneyPerClick = 1
moneyPerSecond = 0
function preload(){
cakeImage = loadImage("cakeimage.png");
backgroundImage = loadImage("dbg.jpg");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  cake = createSprite(windowWidth/2,windowHeight/2,50,50);
  cake.addImage(cakeImage);
  console.log(cake.height);
  shop = new Shop();
}
function draw() {
  background(backgroundImage);  
  textSize(40)
  fill("orange");
  if(money>=1000000&&money<=100000000){
    var M1 = money/M;
  text("Money: "+M1 + "M",windowWidth/2-90,125);
  }
  
  else if(money>=1000000000&&money<=100000000000){
    var B1 = money/B;
  text("Money: "+B1 + "B",windowWidth/2-90,125);
  }

  else if(money>=1000000000000&&money<=100000000000000000){
    var T1 = money/T;
  text("Money: "+T1 + "T",windowWidth/2-90,125);
  }
  else 
  text("Money: "+money,windowWidth/2-90,125);

  shop.display();
  moneyPerSecond2();
  drawSprites();
}

function distanceToCake(){
  distance = cake.x - mouseX;
  distancey = cake.y - mouseY;
  //console.log(distancey);
  //console.log(distance);

}
//-90 to 90 X pos
//-107 to 104 Y pos
function mouseClicked(){
  var dx = windowWidth/2 - (windowWidth/2 - 102)
  console.log(dx);
  if(mouseX>windowWidth/2 - 102 && mouseX<windowWidth/2 + 102 && mouseY>windowHeight/2 - 124 && mouseY<windowHeight/2 + 124){
  money = money + moneyPerClick;
  cake.scale = cake.scale + 0.05;
  setTimeout(originalSize,50)
  }
  return money;
}
function moneyPerSecond1(){
  money = money + moneyPerSecond
}
function moneyPerSecond2(){
if(frameCount%30===0){
  moneyPerSecond1();
}  
 
}
function originalSize(){
  cake.scale = cake.scale - 0.05
}
