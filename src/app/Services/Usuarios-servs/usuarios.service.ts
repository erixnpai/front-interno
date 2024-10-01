import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from '../error/error.service';
import { catchError, retry } from 'rxjs';
import { Dictionary_Url } from '../../utils/Dictionary_Url';
import { UsuariosUrl } from './usuarios-url';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient, private error: ErrorService) { }

  private getEncargado = new Dictionary_Url().url_Transporte + new UsuariosUrl().get_PersonaEncargadoTransporte;

  get_EncargadoService() {
    return this.http.get(this.getEncargado)
      .pipe(retry(), catchError(this.error.handleError));
  }
}
