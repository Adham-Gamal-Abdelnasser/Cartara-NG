import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResult } from '../../../shared/models/result/iresult.interface';
import { IProduct } from '../../../shared/models/product/iproduct.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  //todo inject HttpClient
  constructor(private readonly http: HttpClient) {}
  //todo catch base url
  baseURL: string = environment.apiUrl;
  
  getAllProducts():Observable<IResult<IProduct[]>>{
    return this.http.get<IResult<IProduct[]>>(this.baseURL+'products');
  }
}
