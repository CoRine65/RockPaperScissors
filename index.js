console.log("Let's Begin!!");

function getComputerChoice(){
    const num = Math.floor(Math.random() * 3);
    
    switch (num) {

        case 0:
            return 'rock';
            break;

        case 1:
            return 'paper';
            break;

        case 2:
            return 'scissor';
            break;
    }





}