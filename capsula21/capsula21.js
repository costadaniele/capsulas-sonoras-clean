function setup() {
  createCanvas(windowWidth, windowHeight);
  song = loadSound("/CAPSULAS_MP3/cs21_36U3.mp3", loaded);
  controladores();

  //for bubbles
  amp = new p5.Amplitude();
  fft = new p5.FFT(0, 64);
}

function bolha() {
  var spectrum = fft.analyze();
  for (var i = 0; i < spectrum.length; i++) {
    noFill();
    stroke(0);
    var amp = spectrum[i];
    var y = map(amp, 0, 300, 0, height);
    mappedSpectrum[i] = map(amp, 0, 200, 5, 500);
    mappedWiggle[i] = map(mappedSpectrum[i], 10, 500, 1, 10);

  }

  var spcount = 1;
  for (var j = 0; j < spectrum.length - 20; j += 2) {
    if (mappedSpectrum[j] > 20) {
     // fill(200, 100, j * 5, 250);
    } else {
      noFill();
      stroke(195, 2, 94, 100);
      
    }

    if (spcount % 2 === 0) {
      point(width / 3 + j * 15 + random(mappedWiggle[j], -mappedWiggle[j]), height / 2 + random(mappedWiggle[j], -mappedWiggle[j]), mappedSpectrum[j], mappedSpectrum[j]);
    }
    else {
      point(width / 3 + j * 15 + random(mappedWiggle[j], -mappedWiggle[j]), height / 2 + 70 + random(mappedWiggle[j], -mappedWiggle[j]), mappedSpectrum[j], mappedSpectrum[j]);
    }
    spcount++;
  }

  var spcount = 1;
  //noStroke();
  for (var k = 2; k < spectrum.length - 20; k += 2) {

    if (mappedSpectrum[k] > 50) {
      //fill(195, 1, k * 5, 94);

    } else {
        noFill();
      //fill(0, 200);
      //strokeWeight(2);
      stroke(195, 2, 94, 100);
    }

    if (spcount % 2 === 0) {
      ellipse(width / 3 + k * 15 + random(mappedWiggle[k], -mappedWiggle[k]), height / 2 + random(mappedWiggle[k], -mappedWiggle[k]), mappedSpectrum[k], mappedSpectrum[k]);
    }
    else {
      //strokeWeight(2);
      noFill();
      stroke(195, 2, 94, 100);
      ellipse(width / 3 + k * 15 + random(mappedWiggle[k], -mappedWiggle[k]), height / 2 + 70 + random(mappedWiggle[k], -mappedWiggle[k]), mappedSpectrum[k], mappedSpectrum[k]);
    }
    spcount++;
  }
}

