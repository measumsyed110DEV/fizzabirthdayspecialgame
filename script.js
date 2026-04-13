let score = 0;
let gameRunning = true;

function createCake() {
    if (!gameRunning) return;

    const cake = document.createElement("div");
    cake.classList.add("cake");
    cake.innerHTML = "🎂";

    cake.style.left = Math.random() * 90 + "vw";
    cake.style.animationDuration = (Math.random() * 3 + 2) + "s";

    cake.onclick = () => {
        score++;
        document.getElementById("score").innerText = score;
        cake.remove();
    };

    document.getElementById("gameArea").appendChild(cake);

    setTimeout(() => {
        cake.remove();
    }, 4000);
}

// create cakes continuously
let interval = setInterval(createCake, 700);

// stop game after 15 seconds
setTimeout(() => {
    gameRunning = false;
    clearInterval(interval);

    document.getElementById("finalMsg").style.display = "block";
}, 15000);