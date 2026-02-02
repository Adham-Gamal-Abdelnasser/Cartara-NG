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
  //todo property to get all products
  products$!:Observable<IResult<IProduct[]>>
  getAllProducts():Observable<IResult<IProduct[]>>{
    this.products$= this.http.get<IResult<IProduct[]>>(environment.apiUrl+'products');
    return this.products$;
  }
}
