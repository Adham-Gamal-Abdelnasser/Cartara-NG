import { inject, Injectable, signal, Signal } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResult } from '../../../shared/models/result/iresult.interface';
import { IProduct } from '../../../shared/models/product/iproduct.interface';
import { toSignal } from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  //todo inject HttpClient
  private readonly _httpClient = inject(HttpClient)
  getAllProducts():Observable<IResult<IProduct[]>>{
    return this._httpClient.get<IResult<IProduct[]>>(environment.apiUrl+'products');
  }
}
 