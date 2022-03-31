import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';
  name :string = 'Harold ROJAS';
  number :number = 29091999;
  obj =  {
    name: 'Harold',
    lastname: 'Rojas'
  }  

  showName(){
    console.log(this.name);
    console.log(this.number);
    console.log(this.obj);
  }

}
