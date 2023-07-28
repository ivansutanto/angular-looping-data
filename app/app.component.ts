import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'a game';
  data = [
    {
      "name": "Player",
      "colors": [
        {"name": "https://deckofcardsapi.com/static/img/KH.png"},
        {"name": "https://deckofcardsapi.com/static/img/JC.png"}
      ]
    },

    {
      "name": "Delar",
      "colors": [
        {"name": "https://deckofcardsapi.com/static/img/9C.png"},
      ]
    }
  ]
}
