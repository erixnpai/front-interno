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
        loadComponent: () => import('./catalogos-cuentas/catalogos-cuentas.component')
    },
    {
        path: 'Origenfondos',
        title: 'Origen de los Fondos',
        loadComponent: () => import('./origenfondos/origenfondos.component')
    },
    {
        path: 'Apertura',
        title: 'Apertura de Presupuestos',
        loadComponent: () => import('./apertura-presupuesto/apertura-presupuesto.component')
    }

]

export default RouterPresupuestos;