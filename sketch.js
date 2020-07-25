const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var divisions001;
var divisionHeight = 300;
var particles = [];
var plinkos = [];
var divisions = [];
function setup() {
  var canvas = createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  

  //createSprite(400, 200, 50, 50);
  ground = new Ground(400,795,900,10);
  for (var k = 0; k <=width; k = k + 80) { 
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight)); 
  } 
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75)); 
  }
  for (var j = 50; j <=width-10; j=j+50) { 
    plinkos.push(new Plinko(j,175));
  } 
  for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,275)); 
  } 
  for (var j = 50; j <=width-10; j=j+50) { 
    plinkos.push(new Plinko(j,375));
  }
  //ground.depth= ground.depth+1;
  /*divisions01 = new Division(0,height-divisionHeight/2,10,divisionHeight);
  divisions1 = new Division(80,height-divisionHeight/2,10,divisionHeight);
  divisions2 = new Division(160,height-divisionHeight/2,10,divisionHeight);
  divisions3 = new Division(240,height-divisionHeight/2,10,divisionHeight);
  divisions4 = new Division(320,height-divisionHeight/2,10,divisionHeight);
  divisions5 = new Division(400,height-divisionHeight/2,10,divisionHeight);
  divisions6 = new Division(480,height-divisionHeight/2,10,divisionHeight);
  plinko = new Plinko(40,90,15,15);
  plinko1 = new Plinko(90,90,15,15);
  plinko2 = new Plinko(140,90,15,15);
  plinko3 = new Plinko(190,90,15,15);
  plinko4 = new Plinko(240,90,15,15);
  plinko5 = new Plinko(290,90,15,15);
  plinko6 = new Plinko(340,90,15,15);
  plinko7 = new Plinko(390,90,15,15);
  plinko8 = new Plinko(440,90,15,15);

  plinko01 = new Plinko(15,160,15,15);
  plinko02 = new Plinko(65,160,15,15);
  plinko03 = new Plinko(115,160,15,15);
  plinko04 = new Plinko(165,160,15,15);
  plinko05 = new Plinko(215,160,15,15);
  plinko06 = new Plinko(265,160,15,15);
  plinko07 = new Plinko(315,160,15,15);
  plinko08 = new Plinko(365,160,15,15);
  plinko09 = new Plinko(415,160,15,15);
  plinko10 = new Plinko(465,160,15,15);

  plinko001 = new Plinko(40,240,15,15);
  plinko002 = new Plinko(90,240,15,15);
  plinko003 = new Plinko(140,240,15,15);
  plinko004 = new Plinko(190,240,15,15);
  plinko005 = new Plinko(240,240,15,15);
  plinko006 = new Plinko(290,240,15,15);
  plinko007 = new Plinko(340,240,15,15);
  plinko008 = new Plinko(390,240,15,15);
  plinko009 = new Plinko(440,240,15,15);
  //plinko010 = new Plinko(465,240,15,15);
  //particle = new Particle(90,200,15,15);*/
}





function draw() {
  /*if(frameCount% 60 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }*/
  
  background(0);  
  /*for(var i = 0; i <= width; i = i+80){
    divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
  }*/
  

  Engine.update(engine);
  //strokeWeight(4);
  

  
  /*divisions01.display();
  divisions1.display();
  divisions2.display();
  divisions3.display();
  divisions4.display();
  divisions5.display();
  divisions6.display();
  plinko.display();
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko01.display();
  plinko02.display();
  plinko03.display();
  plinko04.display();
  plinko05.display();
  plinko06.display();
  plinko07.display();
  plinko08.display();
  plinko09.display();
  plinko10.display();
  plinko001.display();
  plinko002.display();
  plinko003.display();
  plinko004.display();
  plinko005.display();
  plinko006.display();
  plinko007.display();
  plinko008.display();
  plinko009.display();*/
  for(j =0;j <=particles.length;  j++){
    particles[j].display();
 }
  //plinko010.display();
  //particle.display();
  //ground.display();
  
  drawSprites();
  

}