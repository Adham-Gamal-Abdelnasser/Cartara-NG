import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { IPaymentResponse } from '../../../shared/models/payment/ipayment.interface';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  paymentHeaders:{headers:{token:string}} = {headers:{token:localStorage.getItem("userToken")!}}
  private readonly _httpClient = inject(HttpClient)

  checkoutSession(cartId:string | null, checkoutData:object):Observable<IPaymentResponse> {
    return this._httpClient.post<IPaymentResponse>(`${environment.apiUrl}orders/checkout-session/${cartId}?url=http://localhost:4200`, checkoutData, this.paymentHeaders)
  }
}
