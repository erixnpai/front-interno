import {  Routes } from "@angular/router"

export  const RouterPresupuestos: Routes = [
    {
        path: '',
        title: 'Inicio',
        loadComponent: () => import('../../../Components/layout/layout.component')
    }
]

export default RouterPresupuestos;