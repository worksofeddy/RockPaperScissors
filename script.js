let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) return "rock";
    else if (randomNumber === 1) return "paper";
    else return "scissors";
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `It's a tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        return `You win this round! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose this round! ${computerChoice} beats ${humanChoice}.`;
    }
}

function updateScores() {
    document.getElementById('humanScore').textContent = humanScore;
    document.getElementById('computerScore').textContent = computerScore;
}

function startRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const roundResult = playRound(humanChoice, computerChoice);

    // Display the round result
    document.getElementById('result').textContent = roundResult;

    // Update scores
    updateScores();

    // Declare the overall winner after 5 rounds
    if (humanScore + computerScore === 5) {
        if (humanScore > computerScore) {
            document.getElementById('result').textContent = `You win the game! Final Score: ${humanScore} - ${computerScore}`;
        } else if (computerScore > humanScore) {
            document.getElementById('result').textContent = `The computer wins! Final Score: ${humanScore} - ${computerScore}`;
        } else {
            document.getElementById('result').textContent = `It's a tie game! Final Score: ${humanScore} - ${computerScore}`;
        }
        // Reset scores for new game
        humanScore = 0;
        computerScore = 0;
        updateScores();
    }
}
