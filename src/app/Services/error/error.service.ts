import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  constructor() { }

  handleError(error: any) {
    let errorDetails = {
      message: '',
      status: error.status || null,
      error: error.error || null
    };

    if (error instanceof ErrorEvent) {
      errorDetails.message = error.error.message;
    } else if (error.rejection && typeof error.rejection === 'string') {
      errorDetails.message = error.rejection;
    } else {
      errorDetails.message = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    // console.error('Error details:', errorDetails);
    return throwError(() => errorDetails);
  }
}
