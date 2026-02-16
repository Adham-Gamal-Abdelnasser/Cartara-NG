import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { IWishAddingResult, IWishResult } from '../../../shared/models/wishresult/iwishresult.interface';


@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  wishlistCount:WritableSignal<number> = signal<number>(0)
  private readonly _httpClient = inject(HttpClient)
  
  getLoggedUserWishlist():Observable<IWishResult> {
    return this._httpClient.get<IWishResult>(`${environment.apiUrl}wishlist`);
  }

  removeProductFromWishlist(id:string):Observable<IWishAddingResult> {
    return this._httpClient.delete<IWishAddingResult>(`${environment.apiUrl}wishlist/${id}`)
  }

  addProductToWishlist(productId:string):Observable<IWishAddingResult> {
    return this._httpClient.post<IWishAddingResult>(`${environment.apiUrl}wishlist`,{productId})
  }
}
