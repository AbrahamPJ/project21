var canvas;
var music;
var box1,box2,box3,box4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(900,600);

    //create 4 different surfaces
box1 = createSprite(200,500,100,50);
box1.shapeColor="red";

box2 = createSprite(400,500,100,50);
box2.shapeColor="yellow";

box3 = createSprite(600,500,100,50);
box3.shapeColor="pink";

box4 = createSprite(800,500,100,50);
box4.shapeColor="blue";

ball = createSprite(random(20,550));
ball.scale = 0.2
ball.shapeColor="white";


ball.velocityX = 1.5;
ball.velocityY = 1.5;
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges = createEdgeSprites();
ball.bounceOff(edges);



    //add condition to check if box touching surface and make it box
if (ball.isTouching(box1)&&ball.bounceOff(box1)){
    ball.shapeColor="red"  
}
if (ball.isTouching(box2)&&ball.bounceOff(box2)){
    ball.shapeColor="yellow"  
}
if (ball.isTouching(box3)&&ball.bounceOff(box3)){
    ball.shapeColor="pink"  
}
if (ball.isTouching(box4)&&ball.bounceOff(box4)){
    ball.shapeColor="blue"  
}

drawSprites();
}
