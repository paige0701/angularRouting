import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { Routes, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot( [{ path: 'home', loadChildren: 'app/layout/layout.module#LayoutModule'}])
  ],
  providers: [],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
