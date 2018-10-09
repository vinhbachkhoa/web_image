import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from '../home/home.component';
import { ErrorComponent } from '../error/error.component';

const routerConfig: Routes = [
    { path: '', component: HomeComponent },
    { path: '', redirectTo: '', pathMatch: 'full' },    
    { path: '**', component: ErrorComponent }
]


export const routerApp = RouterModule.forRoot(routerConfig);