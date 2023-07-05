//variable button
var volume;
var rate;
var playButton;

//variables for bubbles
var amp;
var fft;
var mappedSpectrum = [];
var mappedWiggle = [];
var changeDir = 1;

function draw() {
    header();
    bolha();
}

function header() {
    background(0);
    screenText();
    song.setVolume(volume.value());
    song.rate(rate.value());
}

function togglePlaying() {
    if (!song.isPlaying()) {
        song.play();
        playButton.html("▢");
    } else {
        song.pause();
        playButton.html("▷");
    }
}

function loaded() {
    songLoading++;
    console.log("Loaded");
}

function controladores() {
    volume = createSlider(0, 1, 0.5, 0.05);
    rate = createSlider(0, 2, 1, 0.05);

    playButton = createButton("▷");
    playButton.mousePressed(togglePlaying);

    playButton.position(width / 2 - 13, height - 200);
    volume.position(width / 2 - 60, height - 140); // mais
    rate.position(width / 2 - 60, height - 100); // menos
}

function screenText() {
    textSize(12);
    fill(195, 1, 94);
    textFont("Source Sans Pro");
    text("Volume", width / 2 - 10, height - 145);
    text("Velocidade", width / 2 - 20, height - 105);
}


function mousePressed() {
    changeDir = changeDir * (-1);
}