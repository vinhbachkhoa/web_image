import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from '../home/home.component';
import { AdminComponent } from "../admin/admin.component";
import { ErrorComponent } from '../error/error.component';

const routerConfig: Routes = [
    { path: '', component: HomeComponent },
    { path: 'admin', component: AdminComponent },
    { path: '', redirectTo: '', pathMatch: 'full' },    
    { path: '**', component: ErrorComponent }
]


export const routerApp = RouterModule.forRoot(routerConfig);