function getComputerChoice() {
    var choice = math.random()
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

function getHumanChoice() {
    let h_choice = prompt("Please Choose One of The Following: Rock, Paper or Scissors?").toLowerCase();
    if (h_choice == !'rock' || h_choice == !'paper' || h_choice == !'scissors') {
        while (h_choice == !'rock' || h_choice == !'paper' || h_choice == !'scissors') {
            h_choice = prompt("Please Choice One of The Following: Rock, Paper or Scissors?").toLowerCase();
        }
    }
    return h_choice;
}

function playRound(h_choice, c_choice) {

    h_win = 0;
    c_win = 0;
    if ((h_choice === 'rock' && c_choice === 'paper') ||
    (h_choice === 'paper' && c_choice === 'scissors') ||
    (h_choice === 'scissors' && c_choice === 'rock'))  {
        c_win++;
        console.log(`Computer Wins! ${c_choice} beats ${h_choice}`);
    } else if ((h_choice === 'rock' && c_choice === 'scissors') ||
    (h_choice === 'paper' && c_choice === 'rock') ||
    (h_choice === 'scissors' && c_choice === 'paper')) {
          h_win++;
          console.log(`You Win! ${h_choice} beats ${c_choice}.`);     
    } else {
        console.log(`You both chose ${h_choice}. Try Again.`);
    }
}   


function playGame() {
    h_win = 0;
    c_win = 0;
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(),getComputerChoice())
    }
}

