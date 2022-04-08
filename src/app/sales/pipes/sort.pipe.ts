import { Pipe, PipeTransform } from '@angular/core';
import { Ninja } from '../interface/ninja.interface';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform( [...ninjas]:Ninja[], orderBy:string ): Ninja[] {
    
    // ninjas = ninjas.sort( (a,b) => {
    //   if (a.name > b.name)
    //     return 1
    //   else
    //     return -1
    // })

    switch ( orderBy ){
      case 'name':
        return ninjas.sort( (a,b)=> (a.name > b.name) ?1 :-1 );
      case 'ninjutsu':
        return ninjas.sort( (a,b)=> (a.ninjutsu < b.ninjutsu) ?1 :-1 );
      case 'village':
        return ninjas.sort( (a,b)=> (a.village > b.village) ?1 :-1 );

      default:
        return ninjas;
    }

  }

}
