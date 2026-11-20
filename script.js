function openGift() {
    document.getElementById("gift").scrollIntoView({
        behavior: "smooth"
    });
}


function openLetter() {
    document.getElementById("letter").style.display = "block";
    document.querySelector(".gift-box").style.transform = "scale(0.😎";
}


function closeLetter() {
    document.getElementById("letter").style.display = "none";
    document.querySelector(".gift-box").style.transform = "scale(1)";
}


function showPhoto(src) {
    document.getElementById("largePhoto").src = src;
    document.getElementById("photoViewer").style.display = "flex";
}

function closePhoto() {
    document.getElementById("photoViewer").style.display = "none";
}


let candlesLeft = 3;

function blowCandle(candle) {
    if (candle.dataset.blown === "true") return;

    candle.textContent = "💨";
    candle.dataset.blown = "true";

    candlesLeft--;

    if (candlesLeft === 0) {
        document.getElementById("wishMessage").textContent =
            "Your wish is on its way! ✨🎉";
        celebrate();
    }
}


function toggleMusic() {
    const music = document.getElementById("birthdayMusic");
    const button = document.getElementById("musicButton");

    if (music.paused) {
        music.play().then(() => {
            button.textContent = "⏸ Pause Music";
        }).catch(() => {
            button.textContent = "▶ Try Playing Again";
        });
    } else {
        music.pause();
        button.textContent = "▶ Play Music";
    }
}


function celebrate() {
    const symbols = ["🎉", "💗", "✨", "🎊", "🌸"];

    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement("div");

        confetti.className = "confetti";
        confetti.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.fontSize = (15 + Math.random() * 20) + "px";
        confetti.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}


setInterval(() => {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.textContent = "♥";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);

}, 700);