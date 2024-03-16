
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, delay, finalize, throwError } from 'rxjs';
import { BlockUiServiceService } from '../../Services/block-ui-service.service';
import Swal from 'sweetalert2';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private blockUI: BlockUiServiceService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.blockUI.block();
    return next.handle(request).pipe(
      finalize(() => {
        this.blockUI.unblock();
      }),
      delay(100),
      catchError((httperror: HttpErrorResponse) => {
         Swal.fire({
          title: 'Error',
          text: httperror.error.message,
          icon: 'error',
        })

        this.blockUI.unblock();
        return throwError(httperror);
      })
    ) as Observable<HttpEvent<any>>;
  }
}
