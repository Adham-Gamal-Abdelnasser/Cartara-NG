import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';

export const errorsInterceptor: HttpInterceptorFn = (req, next) => {
  const _toastrService = inject(ToastrService);
  return next(req).pipe(catchError((err:HttpErrorResponse)=>{
    _toastrService.error(err.error.message, 'Cartara error', {progressBar: true})
    return throwError(()=>err );
  }))
};
