console.log("Welcome!!");

function getComputerChoice(){
    const num = Math.floor(Math.random() * 3);
    
    switch (num) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getHumanChoice(){

    let choice;

    while (true){
        choice = prompt("Please input your choice of: rock, paper, scissors. (lower case)");
        if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
            return choice;  // Return the valid choice directly
        } else {
            console.log("Invalid input, try again.");
        }
    }
}

function playRound(humanChoice, computerChoice){  
    if ((humanChoice == 'rock' && computerChoice == 'scissors') || 
        (humanChoice == 'paper' && computerChoice == 'rock') || 
        (humanChoice == 'scissors' && computerChoice == 'paper')) {
            humanScore++;  // This increments the score
            console.log(`Player Wins! Current Score: ${humanScore} Computer Score: ${computerScore}`);
    }
    else if ((humanChoice == 'scissors' && computerChoice == 'rock') || 
        (humanChoice == 'rock' && computerChoice == 'paper') || 
        (humanChoice == 'paper' && computerChoice == 'scissors')) {
            computerScore++;
            console.log(`Computer Wins! Current Score: ${computerScore} Player Score: ${humanScore}`);
    }
    else {
        console.log("It's a tie!");
    }

    return [humanScore, computerScore];
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    // Start a loop to play 5 rounds
    for (let i = 0; i < 5; i++) {
        // Display round number
        console.log(`Round ${i + 1}:`);

        // Get choices from both the human and the computer
        const humanChoice = getHumanChoice(); 
        const computerChoice = getComputerChoice(); 

        // Call playRound and pass choices, it will update scores and log the result
        [humanScore, computerScore] = playRound(humanChoice, computerChoice);  
    }

    // At the end of 5 rounds, print final scores and declare the winner
    if (humanScore > computerScore) {
        console.log("Player wins the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie!");
    }

    console.log("Final Scores:");
    console.log(`Player: ${humanScore} - Computer: ${computerScore}`);
}


