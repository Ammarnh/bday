// Set birthday person's name
const nama = "Nama Orang";
document.querySelector('h1').textContent = `Happy Birthday, ${nama}`;

// Countdown functionality
const countdownElement = document.getElementById('countdown');
const contentElement = document.getElementById('content');
let countdownValue = 10;

function updateCountdown() {
    if (countdownValue > 0) {
        countdownElement.textContent = countdownValue;
        countdownValue--;
        setTimeout(updateCountdown, 1000);
    } else {
        countdownElement.textContent = "Cie 16 Tahun!";
        setTimeout(() => {
            contentElement.classList.add('hidden');
            window.location.href = 'second-page.html';
        }, 2000); // Extended duration for "Cie 16 Tahun!"
    }
}

// Reveal message button functionality
document.getElementById('revealMessage').addEventListener('click', function() {
    this.classList.add('fade-out');
    setTimeout(function() {
        window.location.href = 'second-page.html';
    }, 1000);
});

// Add heart emojis to the page
const heartContainer = document.getElementById('heartEmojis');
for (let i = 0; i < 100; i++) {
    const heart = document.createElement('li');
    heart.innerHTML = '♥';
    heartContainer.appendChild(heart);
}

// Start countdown on page load
document.addEventListener('DOMContentLoaded', (event) => {
    updateCountdown();
});
