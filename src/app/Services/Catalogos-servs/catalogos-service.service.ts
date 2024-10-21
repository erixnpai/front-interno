
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from '../error/error.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogosServiceService {
  
  constructor(private http: HttpClient, private error: ErrorService) { }
}
