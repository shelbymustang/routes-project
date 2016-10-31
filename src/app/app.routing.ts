import {Routes, RouterModule} from '@angular/router'
import { AppAComponent } from './app-a/app-a.component'
import { AppBComponent } from './app-b/app-b.component'
import { COMP_ROUTES } from './app-b/app-b-routing'

const APP_ROUTES: Routes = [
  { path: 'compb/:id', component: AppBComponent},
  { path: 'compb/:id', component: AppBComponent, children:COMP_ROUTES},
  { path: '', component: AppAComponent}
]


export const routerRoutes = RouterModule.forRoot(APP_ROUTES);






/**
 * Created by Shelby-Main on 10/29/2016.
 */
