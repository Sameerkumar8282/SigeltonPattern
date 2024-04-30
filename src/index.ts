import { gameManager } from "./store";
import { startLogger } from "./logger";

// const gameManager = new GameManager();
startLogger();

setInterval(() => {
  gameManager.addGame(Math.random().toString()); //Game ID
}, 5000);
