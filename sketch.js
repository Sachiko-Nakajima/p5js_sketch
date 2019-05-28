
let a=1;
let k=3;
let l=4;
let m=a;
let t=-0;
let r1=100, r2=30;
let n=1.414, d=2; 

function setup() {
  createCanvas(800, 800);
}

function draw() {
  frameRate(1200);
  background(255,1);
  Descartes(a);
//  Cissoid(a);
//  Lissajou(k,l);
//  Cycloid();
//  EpiCycloid(r1,r2)
//　HypoCycloid(r1,r2)
//  LimaconPascal(a,m);
//  Lemniskate(a);
//  RoseCurve(n,d);
//  RoseCurve2(n,d);
//  heart();
//  leaf();
;  t+=0.01;
}

function Descartes(a){
   push();
   translate(width/2,height/2);
    stroke(0);
    fill(0);
//  for(let t=-100; t<100; t++){
  let tt=t-10;
    ellipse(100*3*a*tt/(1+pow(tt,3)),100*3*a*tt*tt/(1+pow(tt,3)),10,10);
//  }
    pop();
}

function Cissoid(a){
   push();
   translate(width/2,height/2);
    stroke(0);
    fill(0);
//  for(let t=-100; t<100; t++){
  let ttt=t-3;
    ellipse(200*(a*ttt*ttt)/(1+pow(ttt,2)),200*(a*pow(ttt,3))/((1+pow(ttt,2))),10,10);
//  }
    pop();
}

function Lissajou(k,l){
   push();
   translate(width/2,height/2);
    stroke(0);
    fill(0);
//  for(let t=-100; t<100; t++){
    ellipse(200*cos(TWO_PI*k*t/20),200*sin(TWO_PI*l*t/20),10,10);
//  }
    pop();
}

// function Asteroid(){
//    push();
//    translate(width/2,height/2);
//   stroke(0,30);
//   noFill();       
//   ellipse(150*cos(TWO_PI*t/5),150*sin(TWO_PI*t/5),100,100);
//   line(150*cos(TWO_PI*t/5),150*sin(TWO_PI*t/5),200*pow(cos(TWO_PI*t/5),3),200*pow(sin(TWO_PI*t/5),3))
//   stroke(0);
//   ellipse(0,0,400,400);
//   stroke(255,0,0);
//     fill(255,0,0);
// //  for(let t=-10000; t<10000; t++){
//  ellipse(200*pow(cos(TWO_PI*t/5),3),200*pow(sin(TWO_PI*t/5),3),3,3);
// //  }
//     pop();
// }

function Cycloid(k,l){
   push();
  translate(0,height/2);
  stroke(0,30);
  noFill();       
  ellipse(50*t,-50,100,100);       
  line(0,0,width,0)
  line(50*t,-50,50*t-50*sin(t),-50+50*cos(t));
  stroke(255,0,0);
    fill(255,0,0);
//  for(let t=-100; t<100; t++){
 ellipse(50*(t-sin(t)),-50*(1-cos(t)),3,3);
//  }
    pop();
}

function EpiCycloid(r1,r2){
   push();
   translate(width/2,height/2);
  stroke(0,10);
  noFill();
  ellipse(0,0,r1*2,r1*2);
  ellipse((r1+r2)*cos(t),(r1+r2)*sin(t),r2*2,r2*2);  
  line((r1+r2)*cos(t),(r1+r2)*sin(t),(r1+r2)*cos(t)-r2*cos((r1+r2)/r2*t),(r1+r2)*sin(t)-r2*sin((r1+r2)/r2*t))
  stroke(255,100,200);
  fill(255,100,200);
//  for(let t=-100; t<100; t++){
  ellipse((r1+r2)*cos(t)-r2*cos((r1+r2)/r2*t),(r1+r2)*sin(t)-r2*sin((r1+r2)/r2*t),3,3);  
//  }
    pop();
}
//r1:r2=1:1 の時、カージオイド、r1:r2=2:1 の時、ネフロイド

function HypoCycloid(r1,r2){
   push();
   translate(width/2,height/2);
  stroke(0,10);
  noFill();
  ellipse(0,0,r1*2,r1*2);
  ellipse((r1-r2)*cos(t),(r1-r2)*sin(t),r2*2,r2*2);  
  line((r1-r2)*cos(t),(r1-r2)*sin(t),(r1-r2)*cos(t)+r2*cos((r1-r2)/r2*t),(r1-r2)*sin(t)-r2*sin((r1-r2)/r2*t))
  stroke(255,100,200);
  fill(255,100,200);
//  for(let t=-100; t<100; t++){
  ellipse((r1-r2)*cos(t)+r2*cos(((r1-r2)/r2)*t),(r1-r2)*sin(t)-r2*sin(((r1-r2)/r2)*t),3,3);  
//  }
    pop();
}
//r1:r2=4:1 の時、アステロイド

function LimaconPascal(a,m){
   push();
   translate(width/2,height/2);
  stroke(0);
  fill(0);
//  for(let t=-100; t<100; t++){
  ellipse(100*a*cos(t)*cos(t)+100*m*cos(t),100*a*cos(t)*sin(t)+100*m*sin(t),3,3);
//  }
    pop();
}

function Lemniskate(a){
  push();
   translate(width/2,height/2);
  stroke(0);
  fill(0);
//  for(let t=-100; t<100; t++){
  ellipse(100*a*sqrt(cos(2*t))*cos(t),100*a*sqrt(cos(2*t))*sin(t),3,3);
//  }
    pop();
}


function RoseCurve(n,d){
   push();
   translate(width/2,height/2);
    stroke(255,0,0);
    fill(255,0,0);
//  for(let t=-100; t<100; t++){
  ellipse(200*cos(n*t/d)*cos(t),200*cos(n*t/d)*sin(t),3,3);
//  }
    pop();
}


function RoseCurve2(n,d){
   push();
   translate(width/2,height/2);
  for(let ss=0; ss<100; ss+=0.01){
    stroke(255-100*noise(ss+1),100*noise(ss+2),200*noise(ss+3));
    fill(255-100*noise(ss+1),100*noise(ss+2),200*noise(ss+3));
    ellipse(200*cos(n*ss/d)*cos(ss)+60*noise(ss-1),200*cos(n*ss/d)*sin(ss)+60*noise(ss-2),6+10*noise(ss-3),6+10*noise(ss-4));
  }
    pop();
}

function heart(){
   push();
   translate(width/2,height/2);
  console.log(t%1000);
  noStroke();

  if(t%1<0.5)
{fill(255,0,100);}
else{fill(255-(t%1-0.5)*200,0,0,10);}
  beginShape();
  for(let sss=0; sss<TWO_PI; sss+=0.01){   vertex(160*pow(sin(sss),3),-130*cos(sss)+50*cos(2*sss)+20*cos(3*sss)+10*cos(4*sss));
  }
  endShape(close);
  pop();
}

function leaf(){
   push();
   translate(width/2,height/2);
  stroke(100,50,20);
  noFill();
    curve(-80+30*noise(0)-100,30*noise(100),-80+30*noise(0),30*noise(100),
          80+30*noise(PI),30*noise(PI+100),80+30*noise(PI),30*noise(PI+100)-100)
  stroke(20,100,20,40);
  fill(20,140,20,20);
  beginShape();
  for(let u=0; u<PI; u+=0.1){   
    vertex(-80*cos(u)+30*noise(u),50*sin(u)+30*noise(u+100))
      }
  endShape();
  beginShape();
  for(let u=0; u<PI; u+=0.1){   
    vertex(-80*cos(u)+30*noise(u),-50*sin(u)+45*noise(u+100))
      }
  endShape();
  pop();
  

}