h_win = 0;
c_win = 0;

const main_menu = document.querySelector('.main_menu');
const playGame = document.querySelector('#playGame');
const game_menu = document.querySelector('.game_menu');
const btn_options = document.querySelectorAll('.option');
const results = document.querySelector('#results');
const h_score = document.querySelector('#h_score');
const c_score = document.querySelector('#c_score');
const end_score = document.querySelector('#end_score');
const end_menu = document.querySelector('.end_menu');
const replay = document.querySelector('#replay');

game_menu.style.display = 'none'
end_menu.style.display = 'none'

playGame.addEventListener('click', function(){
    game_menu.style.display = 'initial'
    main_menu.style.display = 'none'
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

btn_options.forEach(function(button) {
    button.addEventListener('click', function(e) {
        let h_choice = e.target.id;
        let c_choice = getComputerChoice()
        results.textContent = `You selected: ${h_choice}, Computer selected: ${c_choice}.`;
        playRound(h_choice, c_choice)
        checkWinner()
    })
})

function playRound(h_choice, c_choice) {
    if ((h_choice == 'rock' && c_choice == 'paper') ||
    (h_choice == 'paper' && c_choice == 'scissors') ||
    (h_choice == 'scissors' && c_choice == 'rock'))  {
        c_win++;
        c_score.textContent = `Computer Score: ${c_win}`;
        results.textContent += ` Computer Wins!`;
    } else if ((h_choice == 'rock' && c_choice == 'scissors') ||
    (h_choice == 'paper' && c_choice == 'rock') ||
    (h_choice == 'scissors' && c_choice == 'paper')) {
        h_win++;
        h_score.textContent = `Your Score: ${h_win}`;
        results.textContent += ` You Win!`;    
    } else {
        results.textContent += ` No Winner. Try Again.`;
    };
};   


function checkWinner() {
    if (h_win == 5) {
        end_menu.style.display = 'initial';
        end_score.textContent = `You Beat The Computer! Final Score: ${h_win} : ${c_win}`;
        playAgain();
    } else if (c_win == 5) {
        end_menu.style.display = 'initial';
        end_score.textContent = `The Computer Beat You! Final Score: ${c_win} : ${h_win}`;
        playAgain();
    };
};

function playAgain() {
    game_menu.style.display = 'none';
    end_menu.style.display = 'initial';

}

replay.addEventListener('click', function(){
    h_win = 0;
    c_win = 0;
    h_score.textContent = `You Score: 0`;
    c_score.textContent = `Computer Score: 0`;
    game_menu.style.display = 'initial';
    end_menu.style.display = 'none';
});