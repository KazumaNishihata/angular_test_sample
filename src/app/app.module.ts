import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Test01Component } from './component/test01/test01.component';
import { Test01Pipe } from './pipe/test01.pipe';
import { Test01Service } from './service/test01.service';
import { Test02Component } from './component/test02/test02.component';

@NgModule({
  declarations: [
    AppComponent,
    Test01Component,
    Test01Pipe,
    Test02Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    Test01Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
