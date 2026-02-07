import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { toSignal } from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root',
})
export class TestService {
  // ! ________________________________________________________________________________________________first way
  products!:any
  constructor(private readonly http: HttpClient) {
    this.products = toSignal(this.http.get(`${environment.apiUrl}products`),{initialValue: []})
  }  
  // ! ________________________________________________________________________________________________second way
  private readonly _httpClient = inject(HttpClient)
  product$ = toSignal(this._httpClient.get(`${environment.apiUrl}products`),{initialValue: []})
}
