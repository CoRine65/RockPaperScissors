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
            //console.log("Invalid input, try again.");
            displayDiv.innerText = "Invalid input, try again.";
        }
    }
}

function playRound(humanChoice, computerChoice){  
    if ((humanChoice == 'rock' && computerChoice == 'scissors') || 
        (humanChoice == 'paper' && computerChoice == 'rock') || 
        (humanChoice == 'scissors' && computerChoice == 'paper')) {
            playerScore++;  // This increments the score
            //console.log(`Player Wins! Current Score: ${playerScore} Computer Score: ${computerScore}`);
            displayDiv.innerText = `Player Wins! Current Score: ${playerScore} Computer Score: ${computerScore}`;
    }
    else if ((humanChoice == 'scissors' && computerChoice == 'rock') || 
        (humanChoice == 'rock' && computerChoice == 'paper') || 
        (humanChoice == 'paper' && computerChoice == 'scissors')) {
            computerScore++;
            //console.log(`Computer Wins! Current Score: ${computerScore} Player Score: ${playerScore}`);
            displayDiv.innerText = `Computer Wins! Current Score: ${computerScore} Player Score: ${playerScore}`;
    }
    else {
        //console.log("It's a tie!");
        displayDiv.innerText = "It's a tie!";
    }

    if (playerScore === 5) {
        displayDiv.innerText = `Player wins the game! Final Score: ${playerScore} - ${computerScore}`;
        disableButtons(); // Call this function to disable the buttons after the game ends
    } else if (computerScore === 5) {
        displayDiv.innerText = `Computer wins the game! Final Score: ${playerScore} - ${computerScore}`;
        disableButtons(); // Disable buttons when the game ends
    }

    return [playerScore, computerScore];
}



/*
function playGame() {
    //Start a loop to play 5 rounds
    for (let i = 0; i < 5; i++) {
        // Display round number
       // console.log(`Round ${i + 1}:`);
        displayDiv.innerText = `Round ${i + 1}:`;

        // Get choices from both the human and the computer
        const humanChoice = getHumanChoice(); 
        const computerChoice = getComputerChoice(); 

        // Call playRound and pass choices, it will update scores and log the result
        [playerScore, computerScore] = playRound(humanChoice, computerChoice);  
    } 

    // At the end of 5 rounds, print final scores and declare the winner
    if (playerScore > computerScore) {
        console.log("Player wins the game!");
    } else if (playerScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie!");
    }

    console.log("Final Scores:");
    console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
}  */



const rock = document.createElement("button");
    rock.innerText = "Rock";
    document.body.appendChild(rock);
const paper = document.createElement("button");
    paper.innerText = "Paper";
    document.body.appendChild(paper);
const scissors = document.createElement("button"); 
    scissors.innerText = "Scissors";
    document.body.appendChild(scissors);

rock.addEventListener("click", () => playRound("rock", getComputerChoice() ) );
paper.addEventListener("click", () => playRound("paper", getComputerChoice() ) );
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice() ) );


const displayDiv = document.createElement("div");
document.body.appendChild(displayDiv);

    const playGame = document.createElement("button");
        playGame.innerText = "Game Start!";
        document.body.appendChild(playGame);

        playGame.addEventListener("click", () => restartGame());




function disableButtons(){

    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;

}
let playerScore = 0;
    let computerScore = 0;  
function restartGame(){
    

    displayDiv.innerText = "Game started! Choose Rock, Paper, or Scissors.";
    
    // Re-enable the buttons
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;

}
