import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResult } from '../../../shared/models/result/iresult.interface';
import { ICategory } from '../../../shared/models/category/icategory.interface';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private readonly _httpClient = inject(HttpClient);
  
  getAllCategories():Observable<IResult<ICategory[]>> {
    return this._httpClient.get<IResult<ICategory[]>>(`${environment.apiUrl}categories`);
  }
}
