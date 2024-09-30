import { Routes } from '@angular/router';

 export const routes: Routes = [
    {
        path: '',
        title: 'Login',
        loadComponent: () => import('./auth/login/login.component')
    },
    {
        path: 'modulos',
        title: 'Modulos',
        loadComponent: () => import('./pages/moduls/moduls.component')
    },
    {
        path: 'Transporte',
        title: 'Modulos',
        loadComponent: () => import('./pages/modulos/transporte/transporte-layout/transporte-layout.component'),
        loadChildren:() => import("./pages/modulos/router_transporte")
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full',
    },
];


