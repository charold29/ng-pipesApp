import { Component } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styles: [
  ]
})
export class SortComponent {
  
  toUpperCase: boolean = true;

  change(){
    this.toUpperCase = !this.toUpperCase;
  }

}
