// Initialise The Variables
let songIndex = 0;
let audioElement = new Audio('Songs/Stay.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "Stay - Kid LAROI", filePath: "./Songs/Stay.mp3", coverPath: "Covers/Cover1.jpeg" },
    { songName: "Without Me - Eminem", filePath: "./Songs/Without Me.mp3", coverPath: "Covers/Cover2.jpeg" },
    { songName: "As it was - Harry Styles", filePath: "./Songs/As It Was.mp3", coverPath: "Covers/Cover3.png" },
    { songName: "Bones - Imagine Dragons", filePath: "./Songs/Bones.mp3", coverPath: "Covers/Cover1.jpeg" },
    { songName: "Mockingbird - Eminem", filePath: "./Songs/Mockingbird.mp3", coverPath: "Covers/Cover2.jpeg" },
    { songName: "Cradles - Suburban", filePath: "./Songs/Cradles.mp3", coverPath: "Covers/Cover3.png" },
    { songName: "Sing For The Moment - Eminem", filePath: "./Songs/Sing For The Moment.mp3", coverPath: "Covers/Cover1.jpeg" },
    { songName: "Industry Baby - Lil Nas X", filePath: "./Songs/Industry Baby.mp3", coverPath: "Covers/Cover2.jpeg" },
    { songName: "Still D.R.E - Snoop Dog", filePath: "./Songs/Still D.R.E..mp3", coverPath: "Covers/Cover3.png" },
    { songName: "You Know How We Do It - Ice Cube", filePath: "./Songs/You Know How We Do It.mp3", coverPath: "Covers/Cover1.jpeg" },
    { songName: "Ballin' - Rody Richie", filePath: "./Songs/Ballin'.mp3", coverPath: "Covers/Cover2.jpeg" },
    { songName: "Sunflower - Post Malone", filePath: "./Songs/Sunflower.mp3", coverPath: "Covers/Cover3.png" },
    { songName: "Udd Gaye - Ritviz", filePath: "./Songs/Udd Gaye.mp3", coverPath: "Covers/Cover1.jpeg" },
    { songName: "Blinding Lights - Weeknd", filePath: "./Songs/Blinding Lights.mp3", coverPath: "Covers/Cover2.jpeg" },
    { songName: "World's smallest Violin - AJR", filePath: "./Songs/World's Smallest Violin.mp3", coverPath: "Covers/Cover3.png" },
    { songName: "Devil Eyes - Philadalphia", filePath: "./Songs/Devil Eyes.mp3", coverPath: "Covers/Cover1.jpeg" },
    { songName: "Watermelon Sugar - Harry Styles", filePath: "./Songs/Watermelon Sugar.mp3", coverPath: "Covers/Cover2.jpeg" },
    { songName: "Tunak Tunak Tun - Daler Mehendi", filePath: "./Songs/Tunak Tunak Tun.mp3", coverPath: "Covers/Cover3.png" },
    { songName: "Calm Down - Selena Gomez", filePath: "./Songs/Calm Down.mp3", coverPath: "Covers/Cover1.jpeg" },
    { songName: "Ghungroo - Arijit Singh", filePath: "./Songs/Ghungroo.mp3", coverPath: "Covers/Cover2.jpeg" }
]
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//Handle Play/Pause Click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    }
})
// Listen To Events
audioElement.addEventListener('timeupdate', () => {

    //update SeekBar
    progress = parseInt((audioElement.currentTime / audioElement.duration * 100));
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {                                                                
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        //audioElement.src = `Songs/${songIndex + 1}.mp3`;
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 19) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    //audioElement.src = `Songs/${songIndex + 1}.mp3`;
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    //audioElement.src = `Songs/${songIndex + 1}.mp3`;
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName; 
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})