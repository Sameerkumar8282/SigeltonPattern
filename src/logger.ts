import {gameManager} from './store'

// const gameManager = new GameManager();

export function startLogger() {
  setInterval(()=>{
   console.log(gameManager.log()); 
  },5000);  
}
