import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppAComponent } from './app-a/app-a.component';
import { AppBComponent } from './app-b/app-b.component';
import { routerRoutes } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    AppAComponent,
    AppBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routerRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
