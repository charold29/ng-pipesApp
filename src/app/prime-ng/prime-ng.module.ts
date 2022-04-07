import { NgModule } from '@angular/core';

//PrimeNg
import {ButtonModule} from 'primeng/button'
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';
import { RippleModule } from 'primeng/ripple';
import {ToolbarModule} from 'primeng/toolbar';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    RippleModule,
    ToolbarModule,
  ]
})
export class PrimeNgModule { }
