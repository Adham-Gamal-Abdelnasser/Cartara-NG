import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { ICartResult } from '../../../shared/models/cartresult/icartresult.interface';


@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly _httpClient = inject(HttpClient);
  
  addProducttoCart(productId:string):Observable<ICartResult>{
    return this._httpClient.post<ICartResult>(`${environment.cartBase2}cart`, {productId})
  }
  
  getLoggedUserCart():Observable<ICartResult> {
    return this._httpClient.get<ICartResult>(`${environment.cartBase2}cart`)
  }

  removeSpecificCartItem(productId:string) :Observable<ICartResult> {
    return this._httpClient.delete<ICartResult>(`${environment.cartBase2}cart/${productId}`)
  }

  updateCartProductQuantity(productId:string,count:number):Observable<ICartResult> {
    return this._httpClient.put<ICartResult>(`${environment.cartBase2}cart/${productId}`,{count,})
  }

  clearUserCart():Observable<ICartResult> {
    return this._httpClient.delete<ICartResult>(`${environment.cartBase2}cart`)
  }
}
