const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    //level two
    block8=new box(330,235,30,40);
    block9=new box(360,235,30,40);
    block10=new box(390,235,30,40);
    block11=new box(420,235,30,40);
    block12=new box(450,235,30,40);
    //level three
    block13=new box(360,195,30,40);
    block14=new box(390,195,30,40);
    block15=new box(420,195,30,40);
    //top
    block16=new box(390,155,30,40);

    //polygon holder with slings
    plygon = Bodies. circle(50,200,20);
    World.add(world,plygon);

    slingShot=new Slingshot(this.polgon,{x:100,y:200});
}
function draw(){




}
function mouseDragged() {
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingShot.fly()}