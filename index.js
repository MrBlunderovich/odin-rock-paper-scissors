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
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  let winOrLost = "";
  let description = "";
  if (playerSelection === computerSelection) {
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

function game() {
  let score = {
    computer: 0,
    user: 0,
  };
  for (let i = 1; i <= 5; i++) {
    let roundResult = playRound(getUserChoice(), getComputerChoice());
    //console.log(roundResult);
    //roundResult = roundResult.toLowerCase()
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
  console.log(`P${score.user} : C${score.computer}`);
  //call getUserChoice
  //call playRound
  //display result
  //update score

  //display match score
}
