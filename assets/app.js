let hand = [
    rock, paper, scissors
]

function win(score) {
    let i ="";
    document.getElementById('win').innerHTML += <p>${score}</p>
    return i;
}

function lose(score) {
    let i ="";
    document.getElementById('lose').innerHTML += <p>${score}</p>
    return i;
}

function play(playerChoice) {
    let playerChoice = hand[i];
    let computerChoice = hand[Math.random() * (2 - 0) + 0];
    if (playerChoice > computerChoice || ) {
        win(i++);
    }
    if (playerChoice < computerChoice || ) {
        lose(i++);
    }
    return;
}