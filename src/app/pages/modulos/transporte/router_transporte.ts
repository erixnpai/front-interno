import {  Routes } from "@angular/router"

export  const RouterTransporte: Routes = [

    {
        path: '',
        title: 'Modulo Transporte',
        loadComponent: () => import('../../../vista-vacia/vista-vacia.component')
    },
    {
        path: 'solicitar',
        title: 'Solicitar Transporte',
        loadComponent: () => import('./solicitar-transporte/solicitar-transporte.component')
    },
];

export default RouterTransporte;