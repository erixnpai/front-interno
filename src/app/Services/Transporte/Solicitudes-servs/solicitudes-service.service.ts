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


  addSolicitud(data: any) {
    return this.http.post<any>(this.post_addSolicitud, data)
      .pipe(catchError(this.error.handleError));
  }
}
