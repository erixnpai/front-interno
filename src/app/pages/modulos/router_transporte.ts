import {  Routes } from "@angular/router"

export  const RouterTransporte: Routes = [

    {
        path: '',
        title: 'Login',
        loadComponent: () => import('../../vista-vacia/vista-vacia.component')
    }
];

export default RouterTransporte;