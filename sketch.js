const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var iron, rubber, stone


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron = new Iron(200, 200)
    rubber = new Rubber(100,300,23)
    stone = new Stone(200,200, 50,50)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
   iron.display();
    rubber.display();
    stone.display();
}