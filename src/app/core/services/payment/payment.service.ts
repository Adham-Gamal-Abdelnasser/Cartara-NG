import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { IPaymentResponse } from '../../../shared/models/payment/ipayment.interface';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private readonly _httpClient = inject(HttpClient)

  checkoutSession(cartId:string | null, checkoutData:object):Observable<IPaymentResponse> {
    const returnURL= window.location.origin
    return this._httpClient.post<IPaymentResponse>(`${environment.apiUrl}orders/checkout-session/${cartId}?url=http://localhost:4200`, checkoutData)
    // return this._httpClient.post<IPaymentResponse>(`${environment.apiUrl}orders/checkout-session/${cartId}?url=${returnURL}`, checkoutData)
  }
}
