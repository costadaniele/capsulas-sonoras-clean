function setup() {
  createCanvas(windowWidth, windowHeight);
  song = loadSound("/CAPSULAS_MP3/cs05_38U4.mp3", loaded);
  controladores();

  //for bubbles
  amp = new p5.Amplitude();
  fft = new p5.FFT(0, 64);
}

function bolha() {
  var spectrum = fft.analyze();
  for (var i = 0; i < spectrum.length; i++) {
    fill(22, 152, 155);
    stroke(0);
    var amp = spectrum[i];
    var y = map(amp, 0, 5, 0, height);
    mappedSpectrum[i] = map(amp, 0, 800, 0, 200);
    mappedWiggle[i] = map(mappedSpectrum[i], 0, 100, 0, 100);

  }

  var spcount = 1;
  for (var j = 0; j < spectrum.length - 10; j += 2) {
    if (mappedSpectrum[j] > 0) {
     // fill(200, 100, j * 5, 250);
    } else {
      noFill();
      stroke(22, 152, 155);
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

    if (mappedSpectrum[k] > 30) {
      //fill(195, 1, k * 5, 94);

    } else {
      fill(22, 152, 155);
      stroke(0); 
    }
    strokeWeight(3);  
    stroke(22, 152, 155);
    if (spcount % 2 === 0) {
      ellipse(width / 2 + k * 5 + random(mappedWiggle[k], -mappedWiggle[k]), height / 2 + random(mappedWiggle[k], -mappedWiggle[k]), mappedSpectrum[k], mappedSpectrum[k]);
    }
    else {
      fill(22, 152, 155);
    stroke(0);
      ellipse(width / 3 + k * 15 + random(mappedWiggle[k], -mappedWiggle[k]), height / 2 + 100 + random(mappedWiggle[k], -mappedWiggle[k]), mappedSpectrum[k], mappedSpectrum[k]);
    }
    spcount++;
  }
}

