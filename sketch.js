const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var score = 0;
var bi = "Images/dt.png";
var backgroundImg;

function preload() {
    gbi();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    g1 = new Ground(600, height, 1200, 50);
    g2 = new Ground(700, 300,400,20);
    P = new Polygon(120,200,20);
    L = new Chain(P.body,{x:180,y:200});
    b1 = new Block(600,250,50,50);
    b2 = new Block(660,250,50,50);
    b3 = new Block(720,250,50,50);
    b4 = new Block(780,250,50,50);
    b5 = new Block(1260/2,190,50,50);
    b6 = new Block(1380/2,190,50,50);
    b7 = new Block(1500/2,190,50,50);
    b8 = new Block((1260/2+1380/2)/2,130,50,50);
    b9 = new Block((1380/2+1500/2)/2,130,50,50);
    b10 = new Block(((1380/2+1500/2)/2+(1260/2+1380/2)/2)/2,80,50,50);

}

function draw(){
    if(backgroundImg)
    background(backgroundImg)
    Engine.update(engine);
   
    fill("white");
    textSize(30);
    text("SCORE:"+score,60,40);

    txt();

    g1.display();
    g2.display();
    P.display();
    L.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();

    b1.score();
    b2.score();
    b3.score();
    b4.score();
    b5.score();
    b6.score();
    b7.score();
    b8.score();
    b9.score();
    b10.score();

}

function mouseDragged() {
    Matter.Body.setPosition(P.body,{x:mouseX,y:mouseY});
}

function txt() {
    rectMode(CENTER);
    fill("green");
    textSize(30);
    text("Press space To get another chance to play",400,80);
    text("Drag and release the hexagon to destroy the blocks",350,50);
}

function mouseReleased() {
    L.fly();
}

function keyPressed() {
    if(keyCode===32) {
    L.attach(P.body);
    }
}

async function gbi() {
    responce = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    responceJson = await responce.json();
    var dt = responceJson.datetime;
    var hour = dt.slice(11,13);

    if(hour>=6 && hour<=18) {
        bi = "Images/dt.png";
    }
    else {
        bi = "Images/towerImg.jpg";
    }

    backgroundImg = loadImage(bi);
    console.log(backgroundImg);
}




