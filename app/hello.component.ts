import { Component, Input } from '@angular/core';

@Component({
  selector: 'ivan',
  template: `<h1>Let's play {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
