import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DugoKitModule } from 'dugo-kit';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DugoKitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
