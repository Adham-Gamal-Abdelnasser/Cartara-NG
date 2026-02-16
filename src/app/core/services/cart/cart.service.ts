import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { ICartResult } from '../../../shared/models/cartresult/icartresult.interface';
import { IHeaders } from '../../../shared/models/headers/iheaders.interface';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly _httpClient = inject(HttpClient);
  private readonly _platform_ID = inject(PLATFORM_ID)
  cartHeaders:IHeaders={} as IHeaders;
  constructor(){
    if (isPlatformBrowser(this._platform_ID)) {
      this.cartHeaders = {
        headers: {token: localStorage.getItem("userToken")!}
      }
    }
  }
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

  clearUserCart():Observable<ICartResult> {
    return this._httpClient.delete<ICartResult>(`${environment.cartBase2}cart`,this.cartHeaders)
  }
}
