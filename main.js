function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();


    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

var song1 = "music.mp3" ; 
var song2 = "music2.mp3" ;