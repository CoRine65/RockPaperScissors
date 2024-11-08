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

function getHumanChoice(){

    let choice;

    while (true){
    choice = prompt("Please input you choice of: rock, paper, scissor. (lower case)");

        switch (choice){

            case 'rock':
                return 'you picked: rock';
                break;
        
            case 'paper':
                return 'you picked: paper';
                break;

            case 'scissor':
                return 'you picked: scissor';
                break;

            default:
                return "invalid input, try again";

        }
    }




}