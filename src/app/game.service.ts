import { Injectable } from "@angular/core";

@Injectable()
export class GameService {
  /*
  gameStatus:
  0 - means main menu.
  1 - game started!
  2 - win
  */
  gameStatus = 0;

  game_info = {
    score: 0,
    questNum: 10
  };
  rest() {
    this.gameStatus = 0;
  }
  newGame() {
    this.gameStatus = 1;
    this.game_info.score=0;
  }

  constructor() {}
}
