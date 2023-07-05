function setup() {
  createCanvas(windowWidth, windowHeight);
  song = loadSound("/CAPSULAS_MP3/cs10_16A1.mp3", loaded);
  controladores();

  // for lines
  amp = new p5.Amplitude();
}

function lines() {

  linesCount++;
  var vol1 = amp.getLevel();

  d = map(vol1, 0, 0.5, 50, 1600);

  var ampCountTrigger = 3;
  var ampCount = -1;

  rectangleCircle();
  noStroke();
  push();
  translate(width / 2, height / 2);

  if (d > 500) {
    if (ampCountTrigger === 3) {
      ampCount = 0;
      ampCountTrigger = 0;
    }

    if (ampCount % 100 === 0) {
      ampCountTrigger = 1;
    }
  }

  if (ampCount != -1) {
    ampCount++;
  }

  pop();
}

function rectangleCircle() {
  var vol1 = amp.getLevel();
  var d = map(vol1, 0, 0.5, 50, 1600);
  rectMode(CENTER);
  noFill();
  circ.push(d);
  push();
  translate(width / 2, height / 2);
  rotate(radians(frameCount));

  for (var i1 = 0; i1 < circ.length; i1++) {
    strokeWeight(1);
    stroke(200, random(0, 15), 100, 250);
    if (i1 % 3 === 0) {
      ellipse(10, 10, circ[i1], circ[i1]);
    } else {
      ellipse(50, 50, circ[i1] - 50, circ[i1] - 50);
    }
  }

  if (linesCount > 20) {
    circ.splice(0, 1);
  }
  pop();
}
