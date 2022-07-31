const reset = document.querySelector("#reset");

const p1 = {
    score: 0,
    display: document.querySelector("#score1"),
    button: document.querySelector("#player1"),
}

const p2 = {
    score: 0,
    display: document.querySelector("#score2"),
    button: document.querySelector("#player2"),
}

let maxScore = 3;
let isGameOver = false;

const scoreKeeper = function (winner, loser) {
    if (!isGameOver) {
        winner.score = winner.score + 1;
        if (winner.score === maxScore) {
            isGameOver = true;
            winner.display.classList.add("has-text-success");
            loser.display.classList.add("has-text-danger");
            winner.button.disabled = true;
            loser.button.disabled = true;
        }
        winner.display.textContent = winner.score
    }
}

p1.button.addEventListener("click", () => scoreKeeper(p1, p2))

p2.button.addEventListener("click", () => scoreKeeper(p2, p1))

const makeReset = function () {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.display.classList.remove("has-text-success", "has-text-danger");
        p.score = 0;
        p.display.textContent = 0;
        p.button.disabled = false;
    }
}

reset.addEventListener("click", makeReset)

const playTo = document.querySelector("#maxScore");

playTo.addEventListener("change", () => {
    makeReset();
    maxScore = parseInt(playTo.value);
})