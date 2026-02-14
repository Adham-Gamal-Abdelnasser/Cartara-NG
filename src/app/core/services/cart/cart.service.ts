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
  cartHeaders:{headers:{token:string}}={headers: {token: localStorage.getItem("userToken")!}}
  addProducttoCart(productId:string):Observable<ICartResult>{
    return this._httpClient.post<ICartResult>(`${environment.cartBase2}cart`, {productId}, this.cartHeaders)
  }
  
  getLoggedUserCart():Observable<ICartResult> {
    return this._httpClient.get<ICartResult>(`${environment.cartBase2}cart`,this.cartHeaders)
  }

  removeSpecificCartItem(productId:string) :Observable<ICartResult> {
    return this._httpClient.delete<ICartResult>(`${environment.cartBase2}cart/${productId}`,this.cartHeaders)
  }

  updateCartProductQuantity(productId:string,count:number):Observable<ICartResult> {
    return this._httpClient.put<ICartResult>(`${environment.cartBase2}cart/${productId}`,{
      count,
    },this.cartHeaders)
  }
}
