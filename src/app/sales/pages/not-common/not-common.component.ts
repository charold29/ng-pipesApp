import { Component } from '@angular/core';
import { interval } from 'rxjs'

@Component({
  selector: 'app-not-common',
  templateUrl: './not-common.component.html',
  styles: [
  ]
})
export class NotCommonComponent{
  
  //i18nSelect
  name: string = 'Ericka';
  genre: string = 'female';

  invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  };

  //i18nPlural
  clients: string[] = ['José', 'Pedro', 'Maria', 'Juana', 'Percy'];

  clientsMapping = {
      '=0' : 'no tenemos ningún cliente esperando.',
      '=1' : 'tenemos un cliente esperando.',
      'other': 'tenemos # clientes esperando.'
  }

  changeName(){
    this.name = 'Pedro';
    this.genre = 'male';
  }

  deleteClient(){
    this.clients.pop();
  }

  //KeyValuePipe
  person = {
    name: 'Harold',
    year: '22',
    address: 'Trujillo, Perú'
  }

  //JsonPipe
  heroes = [
    {
      name: 'Naruto',
      attribute: 'wind'
    },
    {
      name: 'Sasuke',
      attribute: 'lightning'
    },
    {
      name: 'Sakura',
      attribute: 'healing'
    }
  ]
  
  //AsyncPipe
  myObservable = interval(2000); 

  promiseValue = new Promise( (resolve, reject) =>{
    setTimeout(()=>{
      resolve('Tenemos data de promesa');
    }, 3500);
  });

}