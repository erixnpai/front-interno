import { Injectable } from '@angular/core';
import { ErrorService } from '../../error/error.service';
import { HttpClient } from '@angular/common/http';
import { Dictionary_Url } from '../../../utils/Dictionary_Url';
import { url_transporte } from '../utl_transporte';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {
  constructor(private error: ErrorService, private http: HttpClient) { }

  
  private post_addSolicitud = new Dictionary_Url().url_Transporte + new url_transporte().post_addSolicitud;
  private get_findSolicitudUsuario = new Dictionary_Url().url_Transporte + new url_transporte().get_findSolicitudUsuario;
  private get_allSolicitudesEjecucion = new Dictionary_Url().url_Transporte + new url_transporte().get_allSoliciudesEjecucion;
  // private post_findSolicitudUsuario = new Dictionary_Url().url_Transporte + new url_transporte().post_findSolicitudUsuario;


  addSolicitud(obj: any) {
    return this.http.post<any>(this.post_addSolicitud, obj)
      .pipe(catchError(this.error.handleError));
  }

  findSolicitudUsuario(obj: any) {
    // console.log(this.get_findSolicitudUsuario + obj);
    
    return this.http.get<any>(this.get_findSolicitudUsuario + obj)
      .pipe(catchError(this.error.handleError));
  }


  allSolicitudesEjecucion(obj: any) {
    return this.http.get<any>(this.get_allSolicitudesEjecucion + obj)
      .pipe(catchError(this.error.handleError));
  }





}
