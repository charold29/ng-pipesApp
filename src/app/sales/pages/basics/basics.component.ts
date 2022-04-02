import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
    `
      .no-deco {
        list-style: none;
      }
    `
  ]
})
export class BasicsComponent {

  lowerName: string = 'harold';
  upperName: string = 'HAROLD';
  completeName: string = 'hArOlD rOjAs';

  date: Date = new Date();
}
