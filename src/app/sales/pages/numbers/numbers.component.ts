import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styles: [
    `
     i{
      font-size: 0.8rem;
     }
    `
  ]
})
export class NumbersComponent {

  salesNumber: number = 45500.5555;
  salesPercentage: number = 0.2456;

}