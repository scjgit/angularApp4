
import { Routes } from '@angular/router';
import { ContainerComponent } from '../container';
import { HomeComponent } from '../home';


export const routes: Routes = [
    {
        path: 'container',
        component: ContainerComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];