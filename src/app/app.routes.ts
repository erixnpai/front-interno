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
        path: 'dashboard',
        title: 'Dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component')
    }
];
