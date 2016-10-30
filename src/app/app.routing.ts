import {Routes, RouterModule} from '@angular/router'
import { AppAComponent } from './app-a/app-a.component'
import { AppBComponent } from './app-b/app-b.component'

const APP_ROUTES: Routes = [
    { path: 'compb/:id', component: AppBComponent},
    { path: '', component: AppAComponent}
]


export const routerRoutes = RouterModule.forRoot(APP_ROUTES);






/**
 * Created by Shelby-Main on 10/29/2016.
 */
