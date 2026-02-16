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
  private readonly _platform_ID = inject(PLATFORM_ID)
  wishlistHeaders:IHeaders={} as IHeaders;
    constructor(){
      if (isPlatformBrowser(this._platform_ID)) {
        this.wishlistHeaders = {
          headers: {token: localStorage.getItem("userToken")!}
        }
      }
    }
  getLoggedUserWishlist():Observable<IWishResult> {
    return this._httpClient.get<IWishResult>(`${environment.apiUrl}wishlist`,this.wishlistHeaders);
  }

  removeProductFromWishlist(id:string):Observable<any> {
    return this._httpClient.delete(`${environment.apiUrl}wishlist/${id}`,this.wishlistHeaders)
  }

  addProductToWishlist(productId:string):Observable<IWishAddingResult> {
    return this._httpClient.post<IWishAddingResult>(`${environment.apiUrl}wishlist`,{productId},this.wishlistHeaders)
  }
}
