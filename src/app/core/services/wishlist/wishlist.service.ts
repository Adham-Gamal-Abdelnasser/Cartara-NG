import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { IWishAddingResult, IWishResult } from '../../../shared/models/wishresult/iwishresult.interface';
import { IHeaders } from '../../../shared/models/headers/iheaders.interface';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private readonly _httpClient = inject(HttpClient)
  
  getLoggedUserWishlist():Observable<IWishResult> {
    return this._httpClient.get<IWishResult>(`${environment.apiUrl}wishlist`);
  }

  removeProductFromWishlist(id:string):Observable<any> {
    return this._httpClient.delete(`${environment.apiUrl}wishlist/${id}`)
  }

  addProductToWishlist(productId:string):Observable<IWishAddingResult> {
    return this._httpClient.post<IWishAddingResult>(`${environment.apiUrl}wishlist`,{productId})
  }
}
