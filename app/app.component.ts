import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
  objectKeys = Object.keys;
  data = [
    {
      "name": "Mike",
      "colors": [
        {"name": "blue"},
        {"name": "white"}
      ]
    },

    {
      "name": "Phoebe",
      "colors": [
        {"name": "red"},
        {"name": "yellow"}
      ]
    }
  ]
}
