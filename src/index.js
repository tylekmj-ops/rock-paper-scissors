const prompt = require("prompt-sync")({ sigint: true });
const { Game } = require("./game");

const main = () => {
  console.clear();

  // Menu Loop
  while (true) {
    console.log("\nMenu:");
    console.log(`1. Play Round`);
    console.log(`2. View Stats`);
    console.log(`3. Exit`);
    console.log();

    const choice = prompt("Choose an Action (Enter 1-3):  ");
    const game = new Game();
    if (choice == 1) {
      game.runGame();
    }

    if (choice == 2) {
      game.showStats();
    }

    if (choice == 3) {
      return;
    }

    prompt("\nPress Enter to continue...");
    console.clear();
  }
};

main();
