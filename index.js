function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3) + 1;
  switch (choice) {
    case 1:
      return "Rock";
      break;
    case 2:
      return "Paper";
      break;
    case 3:
      return "Scissors";
      break;

    default:
      break;
  }
}

function capitalize(string) {
  string = string.toLowerCase();
  return `${string[0].toUpperCase()}${string.slice(1)}`;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalize(playerSelection);
  computerSelection = capitalize(computerSelection);
  let winOrLost = "";
  let description = "";
  if (playerSelection === computerSelection) {
    winOrLost = "Draw!";
    description = `${playerSelection} equals ${computerSelection}`;
  } else {
    switch (playerSelection) {
      case "Rock":
        if (computerSelection === "Scissors") {
          winOrLost = "You win!";
          description = `${playerSelection} beats ${computerSelection}`;
        } else {
          winOrLost = "You lose!";
          description = `${computerSelection} beats ${playerSelection}`;
        }
        break;
      case "Paper":
        if (computerSelection === "Rock") {
          winOrLost = "You win!";
          description = `${playerSelection} beats ${computerSelection}`;
        } else {
          winOrLost = "You lose!";
          description = `${computerSelection} beats ${playerSelection}`;
        }
        break;
      case "Scissors":
        if (computerSelection === "Paper") {
          winOrLost = "You win!";
          description = `${playerSelection} beats ${computerSelection}`;
        } else {
          winOrLost = "You lose!";
          description = `${computerSelection} beats ${playerSelection}`;
        }
        break;
      default:
        break;
    }
  }
  display.textContent = `Computer chose ${computerSelection}. ${winOrLost} ${description}`;
  return `${winOrLost} ${description}`;
}

function getUserChoice() {
  let userChoice = "";
  do {
    userChoice = prompt("Rock? Paper? Scissors?: ").toLowerCase();
  } while (
    userChoice !== "rock" &&
    userChoice !== "paper" &&
    userChoice !== "scissors"
  );
  return userChoice;
}

const display = document.querySelector("#display");

const buttons = document.querySelectorAll(".rps-button");
console.log(buttons);
buttons.forEach((button) => {
  button.addEventListener("click", () =>
    playRound(button.id, getComputerChoice())
  );
});

function game() {
  let score = {
    computer: 0,
    user: 0,
  };
  for (let i = 1; i <= 5; i++) {
    let roundResult = playRound(getUserChoice(), getComputerChoice());
    if (roundResult.includes("win")) {
      score.user += 1;
    } else if (roundResult.includes("lose")) {
      score.computer += 1;
    } else if (roundResult.includes("Draw")) {
    } else {
      console.log("wtf?");
    }
    console.log(`${score.user}:${score.computer} ${roundResult}`);
  }
  if (score.computer > score.user) {
    console.log(`Game over! Computer wins ${score.computer}:${score.user}`);
  } else if (score.computer < score.user) {
    console.log(`Game over! You win ${score.user}:${score.computer}`);
  } else {
    console.log(`Game over! Draw ${score.user}:${score.computer}`);
  }
}
