import { Component, OnInit } from '@angular/core';

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
  clients: string[] = ['José', 'Pedro'];

  clientsMapping = {
      '=0' : 'no tenemos ningún cliente esperando.',
      '=1' : 'tenemos un cliente esperando.',
      'other': 'tenemos # clientes esperando.'
  }

}