import { Injectable } from '@angular/core';
import { ErrorService } from '../../error/error.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Dictionary_Url } from '../../../utils/Dictionary_Url';
import { url_login } from './url_login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private error: ErrorService, private http: HttpClient) { }

  private post_LoginUsuario = new Dictionary_Url().url_Login + new url_login().login;


  loginUser(data: any) {
    return this.http.post<any>(this.post_LoginUsuario, data)
      .pipe(catchError(this.error.handleError));
  }
}
