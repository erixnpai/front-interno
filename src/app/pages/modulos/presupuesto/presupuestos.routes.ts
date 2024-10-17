import {  Routes } from "@angular/router"

export  const RouterPresupuestos: Routes = [
    {
        path: 'vacio',
        title: 'Inicio',
        loadComponent: () => import('../../../Components/layout/layout.component')
    },
    {
        path: 'Presupuestos',
        title: 'Presupuestos',
        loadComponent: () => import('./presupuestos/presupuesto.component')
    },
    {
        path: 'Asignacion',
        title: 'Asignacion del Presupuestos',
        loadComponent: () => import('./asignacion/asignacion.component')
    }
    ,
    {
        path: 'ClgCuentas',
        title: 'Catalogos de Cuentas por Oficinas',
        loadComponent: () => import('./asignacion/asignacion.component')
    },
    {
        path: 'Origenfondos',
        title: 'Origen de los Fondos',
        loadComponent: () => import('./asignacion/asignacion.component')
    }

]

export default RouterPresupuestos;