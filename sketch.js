var  bala;
var  espada;
var fondo;
var iron1;
var iron2;
var iron3;
var spider1;
var spider2;
var spider3;
var pistola;
var pistola1;
var player1;
var player2;

function preload(){
  bala = loadImage("bala.gif");
  espada =loadImage("espada-removebg-preview.png");
  fondo = loadImage("fondo.gif");
  iron1=loadImage("ironman1.gif");
  iron2=loadImage("ironman2.gif");
  iron3=loadImage("ironman3.gif");
  pistola=loadImage("pistola-removebg-preview.png");
  pistola1=loadImage("pistola1-removebg-preview.png");
  spider1=loadImage("spider1.gif");
  espada2=loadImage("espada-removebg-preview - copia.png");
  pistola3=loadImage("pistolavolteda-removebg-preview.png");
  basuka=loadImage("Basuka-removebg-preview.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  player1 = createSprite(300,600,150,150);
  player1.addImage(spider1);
  player1.scale=0.7;
  player2 = createSprite(1300,600,150,150);
  player2.addImage(iron3);
  player2.scale = 0.7;

}

function draw() {
  background("purple");
  image(fondo,0,0,width,height);
  armas();
  drawSprites();
}

function aliensclaselite(){
  
}

var armaPlayer1Assigned = false;
var armaPlayer2Assigned = false;

function armas() {
  if (!armaPlayer1Assigned) {
    var armaPlayer1 = createSprite(400, 610, 75, 75);
    armaPlayer1.scale = 0.3;
    var rand = Math.round(random(1, 3));
    switch (rand) {
      case 1:
        armaPlayer1.addImage(pistola);
        break;
      case 2:
        armaPlayer1.addImage(espada2);
        break;
      case 3:
        armaPlayer1.addImage(pistola1);
        break;
    }
    armaPlayer1Assigned = true;
  }

  if (!armaPlayer2Assigned) {
    var armaPlayer2 = createSprite(1200, 550, 25, 25);
    armaPlayer2.scale = 0.3;
    
    var rand = Math.round(random(4, 6));
    switch (rand) {
      case 4:
        armaPlayer2.addImage(pistola3);
        
        break;
      case 5:
        armaPlayer2.addImage(espada);
        
        break;
      case 6:
        armaPlayer2.addImage(basuka);
        
        break;
    }
    armaPlayer2Assigned = true;
  }
}

function RotateFlipType(){

}