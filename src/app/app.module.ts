import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { YelloDirective } from './yello.directive';
import { ViewAfterDirective } from './view-after.directive';

@NgModule({
  declarations: [
    AppComponent,
    YelloDirective,
    ViewAfterDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
