const prompt = require('prompt-sync')();
h_win = 0;
c_win = 0;

const playGame = document.querySelector('#playGame');
const game_menu = document.querySelector('.game_menu');
const btn_options = document.querySelectorAll('.option');
const results = document.querySelector('#results');
btn_options.forEach(function(button) {
    button.addEventListener('click', function(e) {
        let h_choice = e.target.id;
         
    })
})

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

function playRound(h_choice, c_choice) {
    h
    if ((h_choice == 'rock' && c_choice == 'paper') ||
    (h_choice == 'paper' && c_choice == 'scissors') ||
    (h_choice == 'scissors' && c_choice == 'rock'))  {
        c_win++;
        console.log(`Computer Wins! ${c_choice} beats ${h_choice}`);
    } else if ((h_choice == 'rock' && c_choice == 'scissors') ||
    (h_choice == 'paper' && c_choice == 'rock') ||
    (h_choice == 'scissors' && c_choice == 'paper')) {
          h_win++;
          console.log(`You Win! ${h_choice} beats ${c_choice}.`);     
    } else {
        console.log(`You both chose ${h_choice}. Try Again.`);
    }
}   


function playGame() {
    for (h_win < 5; c_win < 5;) {
        playRound(getHumanChoice(),getComputerChoice())
    }
}

playGame()