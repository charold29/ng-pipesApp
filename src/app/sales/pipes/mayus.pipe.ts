import { Pipe, PipeTransform } from "@angular/core" 

@Pipe({
    name: 'mayus',
})
export class MayusPipe implements PipeTransform {

    transform(value: string, toUpperCase=true): string{

        if (toUpperCase){
            return value.toUpperCase();
        }else{
            return value.toLowerCase();
        }
    }
}