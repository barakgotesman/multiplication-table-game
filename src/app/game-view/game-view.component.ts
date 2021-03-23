import { Component, OnInit } from "@angular/core";
import { GameService } from "../game.service";

@Component({
  selector: "app-game-view",
  templateUrl: "./game-view.component.html",
  styleUrls: ["./game-view.component.css"]
})
export class GameViewComponent implements OnInit {
  constructor(public g: GameService) {
    this.getQuest();
  }

  firstNum = 0;
  secondNum = 0;
  realAnswer = 0;
  options = [];
  level = 0;
  hint = false;

  //shuffle array function 
  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

// create new question for the game
  getQuest() {
    this.firstNum = Math.floor(Math.random() * 10);
    this.secondNum = Math.floor(Math.random() * 10);
    this.realAnswer = this.firstNum * this.secondNum;

    this.options = [
      this.realAnswer,
      this.realAnswer + Math.floor(Math.random() * 23),
      Math.floor(Math.random() * 60),
      this.realAnswer -  Math.floor(Math.random() * (this.realAnswer - 1) + 1)
    ];

    // shuffle array of options to answer
    this.shuffle(this.options);

    // update prosses bar for the user.
    this.level = (this.g.game_info.score / this.g.game_info.questNum) * 100;
  }

// check user answer for question
  answer(userAnswer) {
    if (userAnswer == this.realAnswer) {
      if (this.g.game_info.score + 1 < this.g.game_info.questNum) {
        alert("כל הכבוד המשך כך!")
      
        this.g.game_info.score += 1;
        this.getQuest();
      } else {
        this.g.gameStatus = 2; // win screen
      }
    } else {
      alert("לא נכון, נסה שוב");
    }
  }
  ngOnInit() {}
}
