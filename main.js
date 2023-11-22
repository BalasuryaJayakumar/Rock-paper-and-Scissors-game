/* // Reafactored the Game with loops and arrays

let playGame = confirm("Shall we play rock, paper, or scissors?");
if (playGame) {
    //play
    while (playGame) {
        const playerChoice = prompt("Please enter rock, paper, or scissors");
        if (playerChoice || playerChoice === "") {
            const playerOne = playerChoice.trim().toLowerCase();
            if (
                playerOne === "rock" ||
                playerOne === "paper" ||
                playerOne === "scissors" 
            ) {
                const computerChoice = Math.floor(Math.random() * 3);
                const rpsArray = ["rock","paper","scissors"];
                const computer = rpsArray[computerChoice]; 

                const result = 
                playerOne === computer 
                ? `playerOne: ${playerOne}\ncomputer: ${computer}\nTie game!`
                : playerOne === "rock" && computer === "paper"
                ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins!`
                : playerOne === "paper" && computer === "scissors"
                ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins!`
                : playerOne === "scissors" && computer === "rock"
                ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins!`
                : `playerOne: ${playerOne}\ncomputer: ${computer}\nplayerOne wins!`;

                alert(result);
                playGame = confirm("Play Again?")
                if (!playGame) alert("Ok, thanks for playing.");
                continue;
            } else {
                alert("You didn't enter rock, paper, or scissors.");
                continue;
            }
        } else {
            alert("I guess you changed your mind, maybe next time.");
            break;
        }
    } 
} else {
    alert("Ok, maybe next time.");
} */

// Refactored the game with arrays and loops

let playGame = confirm("Shall we play rock, paper, or scissors?");
if (playGame) {
    while (playGame) {
        const playerChoice = prompt("Please enter rock, paper, or scissors.");
        if (playerChoice || playerChoice === "") {
            const playerOne = playerChoice.trim().toLowerCase();
            if (
                playerOne === "rock" ||
                playerOne === "paper" ||
                playerOne === "scissors"
            ) {
                const computerChoice = Math.floor(Math.random() * 3);
                const rpsArray = ["rock","paper","scissors"];
                const computer = rpsArray[computerChoice];

                const result = 
                playerOne === computer 
                ? `playerOne: ${playerOne}\ncomputer: ${computer}\nTie game!`
                : playerOne === "rock" && computer === "paper" 
                ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins!`
                : playerOne === "paper" && computer === "scissors" 
                ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins!`
                : playerOne === "scissors" && computer === "rock" 
                ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins!`
                : `playerOne: ${playerOne}\ncomputer: ${computer}\nplayerOne wins!`;

                alert(result);

                playGame = confirm("Play Again?");
                if (!playGame) alert("Ok, thanks for playing.");
                continue;
            } else {
                alert("You didn't enter rock, paper, or scissors.")
                continue;
            }
        } else {
            alert("I guess you changed your mind, maybe next time.");
            break;
        }
    }
} else {
    alert("Ok, maybe next time.");
}