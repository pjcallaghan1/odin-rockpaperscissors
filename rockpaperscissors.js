const prompt = require('prompt-sync')();
h_win = 0;
c_win = 0;

const playGame = document.querySelector('#playGame');
const game_menu = document.querySelector('.game_menu');
const btn_options = document.querySelectorAll('.option');
const results = document.querySelector('#results');

playGame
function getComputerChoice() {
    var choice = Math.random()
    c_choice = ""
    if (choice <= 0.33) {
        c_choice = "rock";
    } else if (choice <= 0.66) {
        c_choice = "paper";
    } else {
        c_choice = "scissors";
    }
    return c_choice;
}

btn_options.forEach(function(button) {
    button.addEventListener('click', function(e) {
        let h_choice = e.target.id;
        results.textContent = `You selected: ${h_choice}, Computer selected: ${c_choice}.`;
        playRound(h_choice, c_choice)
        checkWinner()
    })
})
function playRound(h_choice, c_choice) {
    h
    if ((h_choice == 'rock' && c_choice == 'paper') ||
    (h_choice == 'paper' && c_choice == 'scissors') ||
    (h_choice == 'scissors' && c_choice == 'rock'))  {
        c_win++;
        results.textContent += ` Computer Wins!`;
    } else if ((h_choice == 'rock' && c_choice == 'scissors') ||
    (h_choice == 'paper' && c_choice == 'rock') ||
    (h_choice == 'scissors' && c_choice == 'paper')) {
        h_win++;
        results.textContent += ` You Win!`;    
    } else {
        results.textContent += ` No Winner. Try Again.`;
    };
};   


function checkWinner() {
    if (h_win == 5) {

    } else if (c_win == 5) {

    };
};
