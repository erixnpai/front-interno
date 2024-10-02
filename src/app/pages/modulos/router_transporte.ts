import {  Routes } from "@angular/router"

export  const RouterTransporte: Routes = [

    {
        path: '',
        title: 'Modulo Transporte',
        loadComponent: () => import('../../vista-vacia/vista-vacia.component')
    },
    {
        path: 'solicitar',
        title: 'Solicitar Transporte',
        loadComponent: () => import('./transporte/solicitar-transporte/solicitar-transporte.component')
    },
    {
        path: 'historial',
        title: 'Historial Transporte',
        loadComponent: () => import('./transporte/historial-transporte/historial-transporte.component')
    },
];

export default RouterTransporte;