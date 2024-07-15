document.addEventListener('DOMContentLoaded', (event) => {
    updateCountdown();
});

function updateCountdown() {
    const countdownWrapper = document.getElementById('countdownWrapper');
    const countdownElement = document.getElementById('countdown');
    const contentElement = document.getElementById('content');
    let countdownValue = 10;

    function countdown() {
        if (countdownValue > 0) {
            countdownElement.textContent = countdownValue;
            countdownValue--;
            setTimeout(countdown, 1000);
        } else {
            countdownElement.textContent = "Cie 16 Tahun!";
            setTimeout(() => {
                countdownWrapper.classList.add('fade-out');
                setTimeout(() => {
                    countdownWrapper.classList.add('hidden');
                    contentElement.classList.remove('hidden');
                    contentElement.style.opacity = 1;
                }, 1000);
            }, 2000);
        }
    }
    countdown();
}

document.getElementById('revealMessage').addEventListener('click', function() {
    this.classList.add('fade-out');
    setTimeout(function() {
        window.location.href = 'second-page.html';
    }, 1000);
});

const heartContainer = document.getElementById('heartEmojis');
for (let i = 0; i < 100; i++) {
    const heart = document.createElement('li');
    heart.innerHTML = '♥';
    heartContainer.appendChild(heart);
}
