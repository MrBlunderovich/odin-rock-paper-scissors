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

//TODO function capitalize(string){}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  let winOrLost = "";
  let description = "";
  if (playerSelection === computerSelection) {
    //declare draw
    winOrLost = "Draw!";
    description = `${capitalize(playerSelection)} equals ${capitalize(
      computerSelection
    )}`;
  } else {
    switch (playerSelection) {
      case "rock":
        if (computerSelection === "scissors") {
          winOrLost = "You win!";
          description = `${capitalize(playerSelection)} beats ${capitalize(
            computerSelection
          )}`;
        } else {
          winOrLost = "You lose!";
          description = `${capitalize(computerSelection)} beats ${capitalize(
            playerSelection
          )}`;
        }
        break;
      case "paper":
        if (computerSelection === "rock") {
          winOrLost = "You win!";
          description = `${capitalize(playerSelection)} beats ${capitalize(
            computerSelection
          )}`;
        } else {
          winOrLost = "You lose!";
          description = `${capitalize(computerSelection)} beats ${capitalize(
            playerSelection
          )}`;
        }
        break;
      case "scissors":
        if (computerSelection === "paper") {
          winOrLost = "You win!";
          description = `${capitalize(playerSelection)} beats ${capitalize(
            computerSelection
          )}`;
        } else {
          winOrLost = "You lose!";
          description = `${capitalize(computerSelection)} beats ${capitalize(
            playerSelection
          )}`;
        }
        break;
      default:
        break;
    }
  }
  return `${winOrLost} ${description}`;
}
