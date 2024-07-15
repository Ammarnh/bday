document.addEventListener('DOMContentLoaded', (event) => {
    const nama = "Sabrina";
    document.querySelector('h1').textContent = `Happy Birthday, ${nama}`;

    const messageText = `Happy birthday ndoro Sabrina, semoga panjang umur, sehat selalu, lancar rezekinya, dipermudah segala urusan, makin sayang sama Beomgyu, makin sayang sama keluarga. Ciee tambah tua aja nih, udah 16 tahun aja wkwkwk. Semoga segala impian kamu terwujud, semoga sekecil apapun harapan kamu bisa terwujud. Makasih ya udah dengerin cerita aku yang gak jelas selama ini mwehehehe. Tetap jadi Sabe yang aku kenal ya, pokoknya doa terbaik deh buat kamu. Maaf gak bisa berbuat apa-apa atau nyampain langsung pesan ini, but I hope you are happy with my words, feel happy because of this message, be happy all the time and don't ever forget me later. Satu lagi, sorry kalau misalnya bikin kamu terganggu ataupun ilfeel pas liburan sekolah kemarin. Tenang aja, nanti saya belajar untuk uncrush deh. Udah deh, gak usah dipikirin yang penting enjoy the school 👊 broo, tahun ajaran baru nihh.`;

    let index = 0;
    function typeWriter() {
        if (index < messageText.length) {
            document.getElementById('message').innerHTML += messageText.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    }
    setTimeout(typeWriter, 1000);

    const heartContainer = document.getElementById('heartEmojis');
    for (let i = 0; i < 100; i++) {
        const heart = document.createElement('li');
        heart.innerHTML = '♥';
        heartContainer.appendChild(heart);
    }
});
