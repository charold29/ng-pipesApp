import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'ninjutsu'
})
export class NinjutsuPipe implements PipeTransform {
    
    transform(value:boolean): string {
        return ( value )
            ? "domina"
            : "no domina"
    }   
}