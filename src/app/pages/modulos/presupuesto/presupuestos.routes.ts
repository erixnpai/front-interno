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
    }
]

export default RouterPresupuestos;