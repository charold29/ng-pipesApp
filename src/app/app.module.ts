import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
//Animations Required
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SalesModule } from './sales/sales.module';
import { SharedModule } from './shared/shared.module';

//Cambiar locale de la app
import localeEs from '@angular/common/locales/es-PE';
import localeJa from '@angular/common/locales/ja';
import { registerLocaleData } from '@angular/common'
registerLocaleData(localeEs);
registerLocaleData(localeJa);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SalesModule,
    SharedModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-PE'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }