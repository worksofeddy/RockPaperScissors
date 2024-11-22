function getComputerChoice() {
    // Generate a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);

    // Return "rock", "paper", or "scissors" based on the random number
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    // Prompt the user for their choice
    let choice = prompt("Please enter rock, paper, or scissors:").toLowerCase();

    // Validate the input
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }

    return choice;
}

function playGame() {
    // Initialize score variables
    let humanScore = 0;
    let computerScore = 0;

    // Function to play a single round
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}.`);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            console.log(`You win this round! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        } else {
            console.log(`You lose this round! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        }

        // Log the current scores
        console.log(`Scores - Human: ${humanScore}, Computer: ${computerScore}`);
    }

    // Play 5 rounds
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}:`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // Declare the overall winner
    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("The computer wins! Better luck next time!");
    } else {
        console.log("It's a tie! What a close game!");
    }
}

// Call playGame to start the game
playGame();
