import { Pipe, PipeTransform } from "@angular/core" 

@Pipe({
    name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {

    // capitalize( word:string ): string{
    //     const lower = word.toLowerCase()
    //     return word.charAt(0).toUpperCase() + lower.slice(1);
    // }

    capitalize( value: string ){
        value = value.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
        return value;
    }

    transform(value: string, toCapitalize=true){

        if (toCapitalize){
            return this.capitalize(value);
        }else{
            return value;
        }
    }
}