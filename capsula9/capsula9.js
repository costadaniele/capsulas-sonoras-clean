function setup() {
  createCanvas(windowWidth, windowHeight);
  song = loadSound("/CAPSULAS_MP3/cs09_20E9.mp3", loaded);
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
    mappedSpectrum[i] = map(amp, 0, 200, 5, 500);
    mappedWiggle[i] = map(mappedSpectrum[i], 10, 500, 1, 10);

  }

  var spcount = 1;
  for (var j = 0; j < spectrum.length - 20; j += 2) {
    if (mappedSpectrum[j] > 20) {
    } else {
      noFill();
      stroke(227, 133, 5, 100);
    }

    if (spcount % 2 === 0) {
      ellipse(width / 3 + j * 15 + random(mappedWiggle[j], -mappedWiggle[j]), height / 2 + random(mappedWiggle[j], -mappedWiggle[j]), mappedSpectrum[j], mappedSpectrum[j]);
    }
    else {
      ellipse(width / 3 + j * 15 + random(mappedWiggle[j], -mappedWiggle[j]), height / 2 + 70 + random(mappedWiggle[j], -mappedWiggle[j]), mappedSpectrum[j], mappedSpectrum[j]);
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
      //stroke(227, 133, 5, 100);
    }
   // strokeWeight(3);  
    stroke(227, 133, 5, 100); 
    if (spcount % 2 === 0) {
      ellipse(width / 3 + k * 15 + random(mappedWiggle[k], -mappedWiggle[k]), height / 2 + random(mappedWiggle[k], -mappedWiggle[k]), mappedSpectrum[k], mappedSpectrum[k]);
    }
    else {
      ///fill(195, 1, k * 5, 94);
      stroke(0);
      ellipse(width / 3 + k * 15 + random(mappedWiggle[k], -mappedWiggle[k]), height / 2 + 70 + random(mappedWiggle[k], -mappedWiggle[k]), mappedSpectrum[k], mappedSpectrum[k]);
    }
    spcount++;
  }
}

