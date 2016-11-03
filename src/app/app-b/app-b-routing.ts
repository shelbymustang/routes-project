import { Routes } from '@angular/router'
import { EditComponent } from './edit-component/edit-component'
import { DetailComponent } from './detail-component/detail-component'
import { AppBGuard } from "./app-b.guard";
import { AppAGuard } from "../app-a/app-a.guard";

export const COMP_ROUTES: Routes = [
  { path: 'edit', component: EditComponent, canDeactivate:[AppAGuard]},
  { path: 'detail', component: DetailComponent, canActivate:[AppBGuard]}
];




/**
 * Created by Jim Shelby on 10/30/2016.
 */
