
import { Injectable } from '@angular/core';

import { catchError, Observable, retry } from 'rxjs';

import { UsuariosUrl } from './usuarios-url';
import { HttpClient } from '@angular/common/http';
import { Dictionary_Url } from '../../../utils/Dictionary_Url';
import { ErrorService } from '../../error/error.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient, private error: ErrorService) { }

  private getEncargado = new Dictionary_Url().url_Transporte + new UsuariosUrl().get_PersonaEncargadoTransporte;

  get_EncargadoService(): Observable<any> {
    // console.log(this.getEncargado);
    return this.http.get<any>(this.getEncargado)
      .pipe(retry(1), catchError(this.error.handleError));
  }
}
