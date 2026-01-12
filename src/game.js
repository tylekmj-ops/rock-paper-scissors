const prompt = require("prompt-sync")({ sigint: true });

class Game {
  static wins = 0;
  static loss = 0;
  static ties = 0;
  static totalGames = 0;

  runGame() {
    while (true) {
      console.clear();
      const player1Choice = prompt(
        "Player1: Choose a move (rock, paper, or scissors): "
      );
      const signs = ["rock", "paper", "scissors"]
      const compChoice = signs[Math.round(Math.random() * 2)]

      Game.totalGames++;
      switch (player1Choice) {
        case "rock":
          if (compChoice == player1Choice) {
            Game.ties++;
            console.log(`You chose: ${player1Choice}`);
            console.log(`Computer chose: ${compChoice}`);
            console.log(`Its a tie!`);
          } else if (compChoice == "paper") {
            Game.loss++;
            console.log(`You chose: ${player1Choice}`);
            console.log(`Computer chose: ${compChoice}`);
            console.log(
              `${compChoice} beats ${player1Choice}! Player2 Wins!`
            );
          } else if (compChoice == "scissors") {
            Game.wins++;
            console.log(`You chose: ${player1Choice}`);
            console.log(`Computer chose: ${compChoice}`);
            console.log(
              `${player1Choice} beats ${compChoice}! Player1 Wins!`
            );
          }
          break;
        case "paper":
          if (compChoice == player1Choice) {
            Game.ties++;
            console.log(`You chose: ${player1Choice}`);
            console.log(`Computer chose: ${compChoice}`);
            console.log(`Its a tie!`);
          } else if (compChoice == "scissors") {
            Game.loss++;
            console.log(`You chose: ${player1Choice}`);
            console.log(`Computer chose: ${compChoice}`);
            console.log(
              `${compChoice} beats ${player1Choice}! Player2 Wins!`
            );
          } else if (compChoice == "rock") {
            Game.wins++;compChoice
            console.log(`You chose: ${player1Choice}`);
            console.log(`Computer chose: ${compChoice}`);
            console.log(
              `${player1Choice} beats ${compChoice}! Player1 Wins!`
            );
          }
          break;
        case "scissors":
          if (compChoice == player1Choice) {
            Game.ties++;
            console.log(`You chose: ${player1Choice}`);
            console.log(`Computer chose: ${compChoice}`);
            console.log(`Its a tie!`);
          } else if (compChoice == "rock") {
            Game.loss++;
            console.log(`You chose: ${player1Choice}`);
            console.log(`Computer chose: ${compChoice}`);
            console.log(
              `${compChoice} beats ${player1Choice}! Player2 Wins!`
            );
          } else if (compChoice == "paper") {
            Game.wins++;
            console.log(`You chose: ${player1Choice}`);
            console.log(`Computer chose: ${compChoice}`);
            console.log(
              `${player1Choice} beats ${compChoice}! Player1 Wins!`
            );
          }
          break;
      }
      return;
    }
  }

  showStats() {
    let winRate = Game.Wins / Game.totalGames;

    console.log(`Current Statistics:`);
    console.log(`Games won: ${Game.wins}`);
    console.log(`Games Lost: ${Game.loss}`);
    console.log(`Games Tied: ${Game.ties}`);
    console.log(`Total Games: ${Game.totalGames}`);
    console.log(`Win Rate: ${winRate}`);
    return;
  }
}

module.exports = { Game };
