import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { ISignUp, SignUpData } from '../../../shared/models/signup/isignup.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _httpClient = inject(HttpClient)
  signUp(data: Partial<SignUpData>): Observable<ISignUp> {
    return this._httpClient.post<ISignUp>(`${environment.apiUrl}auth/signup`,data)
  }
}
