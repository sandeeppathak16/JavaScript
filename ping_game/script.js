'use strict';

const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
let player = 0;

const changePlayer = function(activePlayer) {
    activePlayer.classList.remove('player--active')
    player = (player === 0) ? 1 : 0
    document.querySelector(`.player--${player}`).classList.add('player--active')
    activePlayer = document.querySelector('.player--active');
    activePlayer.querySelector('.current-score').textContent = activePlayer.querySelector('.score').textContent
}


const roolDice = function() {
    const activePlayer = document.querySelector('.player--active');
    let curretScore = Number(activePlayer.querySelector('.current-score').textContent);

    if (activePlayer.classList.contains('player--winner')){
        return 
    };

    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    document.querySelector('.dice').src = `dice-${diceNumber}.png`;
    let activePlayerCurrentScore = activePlayer.querySelector('.current-score');

    if (diceNumber === 1){
        curretScore = 0;
        activePlayerCurrentScore.textContent = curretScore;
        changePlayer(activePlayer);
    } else {
        curretScore += diceNumber;
        if (curretScore <= 200){
            activePlayerCurrentScore.textContent = curretScore;
        } else {
            activePlayer.classList.add('player--winner');
            activePlayer.querySelector('.name').textContent = `Player ${player + 1} has won!`;
        };
    };
}


const holdScore = function () {
    const activePlayer = document.querySelector('.player--active')
    const score = Number(activePlayer.querySelector('.score').textContent);
    const curentScore = Number(activePlayer.querySelector('.current-score').textContent);
    activePlayer.querySelector('.score').textContent = score + curentScore;
    activePlayer.querySelector('.current-score').textContent = 0;
    changePlayer(activePlayer);
}

roll.addEventListener('click', roolDice);
hold.addEventListener('click', holdScore);
newGame.addEventListener('click', function(){
    location.reload();
});