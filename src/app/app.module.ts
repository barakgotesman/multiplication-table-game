import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { GameService } from "./game.service";
import { GameViewComponent } from "./game-view/game-view.component";
import { WinComponent } from './win/win.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, GameViewComponent, WinComponent],
  bootstrap: [AppComponent],
  providers: [GameService]
})
export class AppModule {}
