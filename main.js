song1 = '';
song2 = '';

function play() {
song1.play();

if(song1.isPlaying()) {
    console.log("Song 1 is playing")
}
}


function preload() {
    song1 = loadSound("robbery.mp3");
    song2 = loadSound("come.mp3");
    }