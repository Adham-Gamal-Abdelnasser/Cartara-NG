import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResult } from '../../../shared/models/result/iresult.interface';
import { IBrand } from '../../../shared/models/brand/ibrand.interface';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class BrandsService {
  private readonly _httpClient = inject(HttpClient);

  getAllBrands():Observable<IResult<IBrand[]>> {
    return this._httpClient.get<IResult<IBrand[]>>(`${environment.apiUrl}brands`);
  }
}
