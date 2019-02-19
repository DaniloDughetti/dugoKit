import { NgModule } from '@angular/core';
import { DugoKitComponent } from './dugo-kit.component';
import { UsersCarousel } from './users-carousel/users-carousel.component';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { SafeContentPipe } from './pipes/safe-content.pipe';

@NgModule({
  declarations: [
    DugoKitComponent,
    UsersCarousel,
    SafeContentPipe
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    DugoKitComponent,
    UsersCarousel
  ]
})
export class DugoKitModule { }
