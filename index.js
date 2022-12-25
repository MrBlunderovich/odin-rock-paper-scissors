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
  //display.textContent = `Computer chose ${computerSelection}. ${winOrLost} ${description}. ${score.user}:${score.computer}`;
  //return `${winOrLost} ${description}`;
  return `Computer chose ${computerSelection}. ${winOrLost} ${description}.`;
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
//console.log(buttons);
buttons.forEach((button) => {
  button.addEventListener("click", () => game(button.id, getComputerChoice()));
  /* button.addEventListener("click", () =>
    playRound(button.id, getComputerChoice())
  ); */
});

const score = {
  computer: 0,
  user: 0,
};

function game(userChoice, computerChoice) {
  if (score.computer < 5 && score.user < 5) {
    let roundResult = playRound(userChoice, computerChoice);
    if (roundResult.includes("win")) {
      score.user += 1;
    } else if (roundResult.includes("lose")) {
      score.computer += 1;
    } else if (roundResult.includes("Draw")) {
    } else {
      console.log("wtf?");
    }
    display.textContent = `${roundResult} ${score.user}:${score.computer}`;
    //console.log(`${score.user}:${score.computer} ${roundResult}`);
  } else {
    let matchResult = "";
    if (score.computer > score.user) {
      matchResult = `Game over! Computer wins ${score.computer}:${score.user}`;
    } else if (score.computer < score.user) {
      matchResult = `Game over! You win ${score.user}:${score.computer}`;
    } else {
      matchResult = `Game over! Draw ${score.user}:${score.computer}`;
    }
    display.textContent = `${matchResult}\n Click here to start a new game.`;
    display.addEventListener("click", refresh);
    display.classList.add("pointerable");
    //score.computer = 0;
    //score.user = 0;
  }
}

function refresh() {
  score.computer = 0;
  score.user = 0;
  display.removeEventListener("click", refresh);
  display.textContent = "Click a button to start";
  display.classList.remove("pointerable");
}
