// Set birthday person's name
const nama = "Nama Orang";
document.querySelector('h1').textContent = `Happy Birthday, ${nama}`;

// Typewriter animation for message
const messageText = "Wishing you all the best on your special day!";
let index = 0;
function typeWriter() {
    if (index < messageText.length) {
        document.getElementById('message').innerHTML += messageText.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}
setTimeout(typeWriter, 1000);

// Music player functionality
const songs = ["song1.mp3", "song2.mp3", "song3.mp3", "song4.mp3", "song5.mp3"];
const songTitles = ["Song 1", "Song 2", "Song 3", "Song 4", "Song 5"];
let currentSongIndex = 0;

const audioPlayer = document.getElementById('audioPlayer');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const songTitle = document.getElementById('songTitle');

// Play first song
audioPlayer.src = songs[currentSongIndex];
songTitle.textContent = `Song: ${songTitles[currentSongIndex]}`;

prevButton.addEventListener('click', function() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    audioPlayer.src = songs[currentSongIndex];
    songTitle.textContent = `Song: ${songTitles[currentSongIndex]}`;
    audioPlayer.play();
});

nextButton.addEventListener('click', function() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audioPlayer.src = songs[currentSongIndex];
    songTitle.textContent = `Song: ${songTitles[currentSongIndex]}`;
    audioPlayer.play();
});

// Add heart emojis to the page
const heartContainer = document.getElementById('heartEmojis');
for (let i = 0; i < 100; i++) {
    const heart = document.createElement('li');
    heart.innerHTML = '♥';
    heartContainer.appendChild(heart);
}
