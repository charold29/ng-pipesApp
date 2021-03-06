import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonComponent } from './pages/not-common/not-common.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { SortComponent } from './pages/sort/sort.component';

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { NinjutsuPipe } from './pipes/ninjutsu.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    //Components
    NumbersComponent,
    NotCommonComponent,
    BasicsComponent,
    SortComponent,
    //Pipes
    CapitalizePipe,
    NinjutsuPipe,
    SortPipe,
  ],
  exports: [
    NumbersComponent,
    NotCommonComponent,
    BasicsComponent,
    SortComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SalesModule { }
