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
        path: 'transporte',
        title: 'Transporte',
        loadComponent: () => import('./pages/modulos/transporte/transporte-layout/transporte-layout.component'),
        loadChildren:() => import("./pages/modulos/transporte/router_transporte")
    },
    {
        path: 'presupuesto',
        title: 'Presupuesto',
        loadComponent: () => import('./pages/modulos/presupuesto/sidebar/sidebar.component'),
        loadChildren:() => import("./pages/modulos/presupuesto/presupuestos.routes")
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full',
    },
];


