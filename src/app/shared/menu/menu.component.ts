import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      .menu-icon {
        width: 50px;
        /*FILTER: https://codepen.io/sosuke/pen/Pjoqqp*/
        filter: invert(98%) sepia(4%) saturate(1407%) hue-rotate(162deg) brightness(116%) contrast(100%);
      }
      
      .rotate{
        transition: transform .1s ease-in-out;
      }

      .rotate:hover {
          transform: rotate(20deg);
      }

    `
  ]
})
export class MenuComponent implements OnInit {

  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Números',
            icon: 'pi pi-hashtag',
            routerLink: '/numbers'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: '/not-common'
          }
        ]
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog'
      }
    ]
  }

}