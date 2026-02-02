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
  productDetails$!:Observable<IProduct>
  getSpecificProduct(productId:string|null):Observable<IProduct> {
    this.productDetails$= this._httpClient.get<IProduct>(`${environment.apiUrl}products/${productId}`)
    return this.productDetails$
  }
}
