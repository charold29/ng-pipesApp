import { Component } from '@angular/core';
import { Village, Ninja } from '../../interface/ninja.interface';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styles: [
  ]
})
export class SortComponent {
  
  toCapitalize: boolean = true;
  orderBy: string = ''
  
  ninjas: Ninja[] = [
    {
      name: 'Naruto',
      ninjutsu: true,
      village: Village.hoja
    },
    {
      name: 'Gaara',
      ninjutsu: true,
      village: Village.arena
    },
    {
      name: 'Killer Bee',
      ninjutsu: true,
      village: Village.rayo
    },
    {
      name: 'Neji',
      ninjutsu: false,
      village: Village.hoja
    },
    {
      name: 'Rock Lee',
      ninjutsu: false,
      village: Village.hoja
    },
    {
      name: 'Omoi',
      ninjutsu: true,
      village: Village.nube
    }
  ]

  change(){
    this.toCapitalize = !this.toCapitalize;
  }

  changeOrderBy( value:string ){
    this.orderBy = value;
  }

}
