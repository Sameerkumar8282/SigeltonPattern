interface Game {
  Id: string;
  whitePlayerName :string;
  blackPlayerName :string;
  moves : string[]
}

//rather than exportinf an array we use the class
// export const games :Game[] =[]

export class GameManager{
  games :Game[] =[]

  constructor(){
    this.games = []
  }

  addMove(gameId :string, move:string){
    console.log(`Adding move to ${move} and gameId ${gameId}`);
    const game = this.games.find((game) => game.Id === gameId );
    game? game.moves.push(move):console.error("No such game"); 
  }

  addGame(gameId:string){
    const game ={
      Id:gameId,
      whitePlayerName:"White",
      blackPlayerName:"Black",
      moves:[]
    }

    this.games.push(game);
  }

  log(){
    console.log(this.games);
  }
}

export const gameManager = new GameManager()