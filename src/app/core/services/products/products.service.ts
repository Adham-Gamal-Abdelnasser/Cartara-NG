import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResult } from '../../../shared/models/result/iresult.interface';
import { IProduct } from '../../../shared/models/product/iproduct.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  //todo inject HttpClient
  private readonly _httpClient = inject(HttpClient)
  getAllProducts():Observable<IResult<IProduct[]>>{
    return this._httpClient.get<IResult<IProduct[]>>(environment.apiUrl+'products');
  }
  setGetProducts( cateId?:string, page?:number, sort:'price' | '-price' = 'price' ):Observable<IResult<IProduct[]>>{
    let params = new HttpParams().set('limit', '12').set('sort', sort);
    cateId ? params = params.set('category[in]',cateId): '';
    page ? params = params.set('page', page.toString()): '';
    return this._httpClient.get<IResult<IProduct[]>>(environment.apiUrl+'products', {params});
  }
}
 