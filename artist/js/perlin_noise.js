// http://genekogan.com/code/p5js-perlin-noise/
var t;

function setup(){
  createCanvas(600, 600);
  background(0);
  stroke(100, 255, 100, 15);
  noFill();
  t = 0;
}

function draw() {
  translate(width/2, -height/2);

  beginShape();
  for (var i = 0; i <= 200; i++) {
    var ang = map(i, 0, 200, 0, PI);
    var rad = 700 * noise(i * 0.01, t * 0.005);
    // var rad = 200 * noise(t * 0.005);
    var x = rad * cos(ang);
    var y = rad * sin(ang) + t*0.5;

    // x = map(i, 0, 200, -250, 250);
    // y = 100*noise(i * 0.01, t * 0.005);
    curveVertex(x, y);
  }
  endShape();

  t += 1;

  // background(0, 2);
  // clear the background every 600 frames using mod (%) operator
  if (frameCount % 1000 == 0) {
	 background(0);
   t = 0;
  }

}