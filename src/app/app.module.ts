import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { HighlighterDirective } from './highlighter.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    HighlighterDirective],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
