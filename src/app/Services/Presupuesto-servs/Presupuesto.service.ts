
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ErrorService } from '../error/error.service';
import { Dictionary_Url } from "../../utils/Dictionary_Url";
import { Urls_Presupuesto } from "./Urls_Presupuesto"

//path_presupuesto

@Injectable({
  providedIn: 'root'
})
export class PresupuestoServices {
  // Post
  post_PresupuestoHistorial = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().post_PresupuestoHistorial;
  post_TipoCtaPorDominio = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().post_TipoCtaPorDominio;
  post_Autoridad = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().post_Autoridad;
  post_Cargos = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().post_Cargos;
  post_CatCuentasPorDominio = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().post_CatCuentasPorDominio;
  post_Ejercicio_Autoridad = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().post_Ejercicio_Autoridad;
  post_CtasGastosClasificador = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().post_CtasGastosClasificador;
  post_OrigenDeFondos = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().post_OrigenDeFondos;
  post_PresupuestoDetalle = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().post_PresupuestoDetalle;
  post_Niveles = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().post_Niveles;
  post_Moneda = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().post_Moneda;
  post_CatCuentas = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().post_CatCuentas;
  post_OrganicaPorDominio = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().post_OrganicaPorDominio;
  post_CuentasNombre = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().post_CuentasNombre;
  post_PresupuestoMaestro = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().post_PresupuestoMaestro;
  post_PresupuestoEstad = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().post_PresupuestoEstad;
  post_PresupuestoApertura = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().post_PresupuestoApertu;

  // Rutas Get y Dell
  getDell_PresupuestoHistorial = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().getDell_PresupuestoHistorial;
  getDell_TipoCtaPorDominio = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().getDell_TipoCtaPorDominio;
  getDell_Autoridad = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().getDell_Autoridad;
  getDell_Cargos = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().getDell_Cargos;
  getDell_CatCuentasPorDominio = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().getDell_CatCuentasPorDominio;
  getDell_Ejercicio_Autoridad = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().getDell_Ejercicio_Autoridad;
  getDell_CtasGastosClasificador = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().getDell_CtasGastosClasificador;
  getDell_OrigenDeFondos = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().getDell_OrigenDeFondos;
  getDell_PresupuestoDetalle = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().getDell_PresupuestoDetalle;
  getDell_Niveles = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().getDell_Niveles;
  getDell_Moneda = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().getDell_Moneda;
  getDell_CatCuentas = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().getDell_CatCuentas;
  getDell_OrganicaPorDominio = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().getDell_OrganicaPorDominio;
  getDell_CuentasNombre = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().getDell_CuentasNombre;
  getDell_PresupuestoMaestro = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().getDell_PresupuestoMaestro;
  getDell_PresupuestoEstad = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().getDell_PresupuestoEstad;
  getDell_PresupuestoApertura = new Dictionary_Url().path_presupuesto + new Urls_Presupuesto().getDell_PresupuestoApertu;
  //

  constructor(private http: HttpClient, private error: ErrorService) { }

  // Peticiones ADD     ,obj_full  pasa a   ,obj_full 
  //falta los servios de add y delete de presupuestoApertura
  add_PresupuestoHistorial(obj_full: any): Observable<any[]> {
    return this.http.post<any>(this.post_PresupuestoHistorial, obj_full)
      .pipe(retry(1), catchError(this.error.handleError));
  }
  add_TipoCtaPorDominio(obj_full: any): Observable<any[]> {
    return this.http.post<any>(this.post_TipoCtaPorDominio, obj_full)
      .pipe(retry(1), catchError(this.error.handleError));
  }
  add_Autoridad(obj_full: any): Observable<any[]> {
    return this.http.post<any>(this.post_Autoridad, obj_full)
      .pipe(retry(1), catchError(this.error.handleError));
  }
  add_Cargos(obj_full: any): Observable<any[]> {
    return this.http.post<any>(this.post_Cargos, obj_full)
      .pipe(retry(1), catchError(this.error.handleError));
  }
  add_CatCuentasPorDominio(obj_full: any): Observable<any[]> {
    return this.http.post<any>(this.post_CatCuentasPorDominio, obj_full)
      .pipe(retry(1), catchError(this.error.handleError));
  }
  add_Ejercicio_Autoridad(obj_full: any): Observable<any[]> {
    return this.http.post<any>(this.post_Ejercicio_Autoridad, obj_full)
      .pipe(retry(1), catchError(this.error.handleError));
  }
  add_CtasGastosClasificador(obj_full: any): Observable<any[]> {
    return this.http.post<any>(this.post_CtasGastosClasificador, obj_full)
      .pipe(retry(1), catchError(this.error.handleError));
  }
  add_OrigenDeFondos(obj_full: any): Observable<any[]> {
    return this.http.post<any>(this.post_OrigenDeFondos, obj_full)
      .pipe(retry(1), catchError(this.error.handleError));
  }
  add_PresupuestoDetalle(obj_full: any): Observable<any[]> {
    return this.http.post<any>(this.post_PresupuestoDetalle, obj_full)
      .pipe(retry(1), catchError(this.error.handleError));
  }
  add_Niveles(obj_full: any): Observable<any[]> {
    return this.http.post<any>(this.post_Niveles, obj_full)
      .pipe(retry(1), catchError(this.error.handleError));
  }
  add_Moneda(obj_full: any): Observable<any[]> {
    return this.http.post<any>(this.post_Moneda, obj_full)
      .pipe(retry(1), catchError(this.error.handleError));
  }
  add_CatCuentas(obj_full: any): Observable<any[]> {
    return this.http.post<any>(this.post_CatCuentas, obj_full)
      .pipe(retry(1), catchError(this.error.handleError));
  }
  add_OrganicaPorDominio(obj_full: any): Observable<any[]> {
    return this.http.post<any>(this.post_OrganicaPorDominio, obj_full)
      .pipe(retry(1), catchError(this.error.handleError));
  }
  add_CuentasNombre(obj_full: any): Observable<any[]> {
    return this.http.post<any>(this.post_CuentasNombre, obj_full)
      .pipe(retry(1), catchError(this.error.handleError));
  }
  add_PresupuestoMaestro(obj_full: any): Observable<any[]> {
    return this.http.post<any>(this.post_PresupuestoMaestro, obj_full)
      .pipe(retry(1), catchError(this.error.handleError));
  }
  add_PresupuestoEstad(obj_full: any): Observable<any[]> {
    return this.http.post<any>(this.post_PresupuestoEstad, obj_full)
      .pipe(retry(1), catchError(this.error.handleError));
  }


  //servicios: GET Y DELETE 
  get_PresupuestoHistorial(obj_full: any): Observable<any> {
    return this.http.get<any>(this.getDell_PresupuestoHistorial + obj_full)
      .pipe(retry(1), catchError(this.error.handleError));

  }
  get_TipoCtaPorDominio(obj_full: any): Observable<any> {
    return this.http.get<any>(this.getDell_TipoCtaPorDominio + obj_full)
      .pipe(retry(1), catchError(this.error.handleError));

  }
  get_Autoridad(obj_full: any): Observable<any> {
    return this.http.get<any>(this.getDell_Autoridad + obj_full)
      .pipe(retry(1), catchError(this.error.handleError));

  }
  get_Cargos(obj_full: any): Observable<any> {
    return this.http.get<any>(this.getDell_Cargos + obj_full)
      .pipe(retry(1), catchError(this.error.handleError));

  }
  get_CatCuentasPorDominio(obj_full: any): Observable<any> {
    return this.http.get<any>(this.getDell_CatCuentasPorDominio + obj_full)
      .pipe(retry(1), catchError(this.error.handleError));

  }
  get_Ejercicio_Autoridad(obj_full: any): Observable<any> {
    return this.http.get<any>(this.getDell_Ejercicio_Autoridad + obj_full)
      .pipe(retry(1), catchError(this.error.handleError));

  }
  get_CtasGastosClasificador(obj_full: any): Observable<any> {
    return this.http.get<any>(this.getDell_CtasGastosClasificador + obj_full)
      .pipe(retry(1), catchError(this.error.handleError));

  }
  get_OrigenDeFondos(obj_full: any): Observable<any> {
    return this.http.get<any>(this.getDell_OrigenDeFondos + obj_full)
      .pipe(retry(1), catchError(this.error.handleError));

  }
  get_PresupuestoDetalle(obj_full: any): Observable<any> {
    return this.http.get<any>(this.getDell_PresupuestoDetalle + obj_full)
      .pipe(retry(1), catchError(this.error.handleError));

  }
  get_Niveles(obj_full: any): Observable<any> {
    return this.http.get<any>(this.getDell_Niveles + obj_full)
      .pipe(retry(1), catchError(this.error.handleError));

  }
  get_Moneda(obj_full: any): Observable<any> {
    return this.http.get<any>(this.getDell_Moneda + obj_full)
      .pipe(retry(1), catchError(this.error.handleError));

  }
  get_CatCuentas(obj_full: any): Observable<any> {
    return this.http.get<any>(this.getDell_CatCuentas + obj_full)
      .pipe(retry(1), catchError(this.error.handleError));

  }
  get_OrganicaPorDominio(obj_full: any): Observable<any> {
    return this.http.get<any>(this.getDell_OrganicaPorDominio + obj_full)
      .pipe(retry(1), catchError(this.error.handleError));

  }
  get_CuentasNombre(obj_full: any): Observable<any> {
    return this.http.get<any>(this.getDell_CuentasNombre + obj_full)
      .pipe(retry(1), catchError(this.error.handleError));

  }
  get_PresupuestoMaestro(obj_full: any): Observable<any> {
    return this.http.get<any>(this.getDell_PresupuestoMaestro + obj_full)
      .pipe(retry(1), catchError(this.error.handleError));

  }
  get_PresupuestoEstad(obj_full: any): Observable<any> {
    return this.http.get<any>(this.getDell_PresupuestoEstad + obj_full)
      .pipe(retry(1), catchError(this.error.handleError));

  }

  //servicios: DELETE      'delete/', obj_full   pasa a  'delete/', obj_full 
  Dell_PresupuestoHistorial(obj_full: any): Observable<any> {
    return this.http.post<any>(this.getDell_PresupuestoHistorial +  'delete/', obj_full )
      .pipe(retry(1), catchError(this.error.handleError));
  }
  Dell_TipoCtaPorDominio(obj_full: any): Observable<any> {
    return this.http.post<any>(this.getDell_TipoCtaPorDominio +  'delete/', obj_full )
      .pipe(retry(1), catchError(this.error.handleError));
  }
  Dell_Autoridad(obj_full: any): Observable<any> {
    return this.http.post<any>(this.getDell_Autoridad +  'delete/', obj_full )
      .pipe(retry(1), catchError(this.error.handleError));
  }
  Dell_Cargos(obj_full: any): Observable<any> {
    return this.http.post<any>(this.getDell_Cargos +  'delete/', obj_full )
      .pipe(retry(1), catchError(this.error.handleError));
  }
  Dell_CatCuentasPorDominio(obj_full: any): Observable<any> {
    return this.http.post<any>(this.getDell_CatCuentasPorDominio +  'delete/', obj_full )
      .pipe(retry(1), catchError(this.error.handleError));
  }
  Dell_Ejercicio_Autoridad(obj_full: any): Observable<any> {
    return this.http.post<any>(this.getDell_Ejercicio_Autoridad +  'delete/', obj_full )
      .pipe(retry(1), catchError(this.error.handleError));
  }
  Dell_CtasGastosClasificador(obj_full: any): Observable<any> {
    return this.http.post<any>(this.getDell_CtasGastosClasificador +  'delete/', obj_full )
      .pipe(retry(1), catchError(this.error.handleError));
  }
  Dell_OrigenDeFondos(obj_full: any): Observable<any> {
    return this.http.post<any>(this.getDell_OrigenDeFondos +  'delete/', obj_full )
      .pipe(retry(1), catchError(this.error.handleError));
  }
  Dell_PresupuestoDetalle(obj_full: any): Observable<any> {
    return this.http.post<any>(this.getDell_PresupuestoDetalle +  'delete/', obj_full )
      .pipe(retry(1), catchError(this.error.handleError));
  }
  Dell_Niveles(obj_full: any): Observable<any> {
    return this.http.post<any>(this.getDell_Niveles +  'delete/', obj_full )
      .pipe(retry(1), catchError(this.error.handleError));
  }
  Dell_Moneda(obj_full: any): Observable<any> {
    return this.http.post<any>(this.getDell_Moneda +  'delete/', obj_full )
      .pipe(retry(1), catchError(this.error.handleError));
  }
  Dell_CatCuentas(obj_full: any): Observable<any> {
    return this.http.post<any>(this.getDell_CatCuentas +  'delete/', obj_full )
      .pipe(retry(1), catchError(this.error.handleError));
  }
  Dell_OrganicaPorDominio(obj_full: any): Observable<any> {
    return this.http.post<any>(this.getDell_OrganicaPorDominio +  'delete/', obj_full )
      .pipe(retry(1), catchError(this.error.handleError));
  }
  Dell_CuentasNombre(obj_full: any): Observable<any> {
    return this.http.post<any>(this.getDell_CuentasNombre +  'delete/', obj_full )
      .pipe(retry(1), catchError(this.error.handleError));
  }
  Dell_PresupuestoMaestro(obj_full: any): Observable<any> {
    return this.http.post<any>(this.getDell_PresupuestoMaestro +  'delete/', obj_full )
      .pipe(retry(1), catchError(this.error.handleError));
  }
  Dell_PresupuestoEstad(obj_full: any): Observable<any> {
    return this.http.post<any>(this.getDell_PresupuestoEstad +  'delete/', obj_full )
      .pipe(retry(1), catchError(this.error.handleError));
  }


}