var scl = 20;
var w = 2000; 
var h = 1600;
var cols = w/scl;
var rows = h/scl;

var n0;
var n1; 
// var terrain_x = [];
// var terrain_y = [];
var flying = 0;

function setup(){
  createCanvas(600, 600, WEBGL);//P3D);
  background(0);
  // cols = w / scl;
  // rows = h/scl;
  
  //// terrain = new var [cols][rows];
  
}

function draw(){
  //// flying -= 0.01;
  //// var yoff = flying;
  //// for(var y = 0; y < rows; y++){
  ////   var xoff = 0;
  ////    for(var x = 0; x < cols; x++){
  ////      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
  ////      xoff += 0.2;
  ////    }
  ////    yoff += 0.2;
  ////  }
  
  background(0);
  //noStroke();
  stroke(255);
  noFill();
  //fill(100);
  translate(width/2, height/2+50);
  rotateX(PI/3);
  frameRate(1);
  
  // translate(-w/2, -h/2);
  for(var y = 0; y < rows-1; y++){
    beginShape(TRIANGLE_STRIP);
    for(var x = 0; x < cols; x++){
      
      // map(noise(xoff, yoff), 0, 1, -100, 100)
      n0 = noise(-10, 10);
      n1 = noise(-10, 10);
      
      vertex(x*scl, y*scl, n0);
      vertex(x*scl, (y+1)*scl, n1);
      
      //rect(x*scl, y*scl, scl, scl);
    }
    endShape();
  }
}