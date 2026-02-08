import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { IProduct } from '../../../shared/models/product/iproduct.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  private readonly _httpClient = inject(HttpClient)
  // productDetails$!:Observable<{data:IProduct}>
  // getSpecificProduct(productId:string|null):Observable<{data:IProduct}> {
  //   this.productDetails$= this._httpClient.get<{data:IProduct}>(`${environment.apiUrl}products/${productId}`)
  //   return this.productDetails$
  // }
  getSpecificProduct(productId:string|null):Observable<{data:IProduct}> {
    return this._httpClient.get<{data:IProduct}>(`${environment.apiUrl}products/${productId}`)    
  }
}
