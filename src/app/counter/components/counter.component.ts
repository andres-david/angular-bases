import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>
      {{ counter }}
    </h3>

    <button (click) = "increaseBy(+1)"> +1 </button>
    <button (click)="reset()"> Reset </button>
    <button (click)="increaseBy(-1)"> -1 </button>
  `
})
export class CounterComponent {

  counter: number = 10;

  constructor() {}

  increaseBy(n: number): void {
    this.counter += 1;
  }

  reset() {
    this.counter = 10;
  }

}
