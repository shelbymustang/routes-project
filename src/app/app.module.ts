import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppAComponent } from './app-a/app-a.component';
import { AppBComponent } from './app-b/app-b.component';
import { routerRoutes } from "./app.routing";
import { EditComponent } from './app-b/edit-component/edit-component';
import { DetailComponent } from './app-b/detail-component/detail-component';
import { AppBGuard } from "./app-b/app-b.guard";
import {AppAGuard} from "./app-a/app-a.guard";

@NgModule({
  declarations: [
    AppComponent,
    AppAComponent,
    AppBComponent,
    EditComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routerRoutes
  ],
  providers: [AppBGuard, AppAGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
