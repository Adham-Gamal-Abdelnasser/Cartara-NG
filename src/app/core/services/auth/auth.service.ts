import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { ISignUp, SignUpData } from '../../../shared/models/signup/isignup.interface';
import { ILogIn, LogInData } from '../../../shared/models/login/ilogin.interface';
import { isPlatformBrowser } from '@angular/common';
import { jwtDecode } from 'jwt-decode';
import { IDecodedUser } from '../../../shared/models/decodeduser/idecodeduser.interface';
import { Router } from '@angular/router';
import { IForgetPasswordData, IForgetPasswordResponse } from '../../../shared/models/forgetpassword/iforgetpassword.interface';
import { IResetCodeData, IResetCodeResponse } from '../../../shared/models/resetcode/iresetcode.interface';
import { IResetPasswordData, IResetPasswordResponse } from '../../../shared/models/resetpassword/iresetpassword.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  decodedUser:WritableSignal<IDecodedUser> = signal<IDecodedUser>({} as IDecodedUser)
  private readonly _httpClient = inject(HttpClient)
  private readonly _platform_id = inject(PLATFORM_ID)
  private readonly _router = inject(Router)

  signUp(data: Partial<SignUpData>): Observable<ISignUp> {
    return this._httpClient.post<ISignUp>(`${environment.apiUrl}auth/signup`,data)
  }
  
  logIn(data: Partial<LogInData>):Observable<ILogIn> {
    return this._httpClient.post<ILogIn>(`${environment.apiUrl}auth/signin`,data)
  }

  logOut():void {
    localStorage.removeItem("userToken")
    this._router.navigate(["/login"])
  }

  checkIsLoggedIn() {
   try {
    if(isPlatformBrowser(this._platform_id)){
      const token = localStorage.getItem("userToken");
      this.isLoggedIn$.next(true)
      if(token){
        this.decodedUser.set(jwtDecode(token))
        this.isLoggedIn$.next(false)
        return;
      }
    }
   } catch (error) {
    this.isLoggedIn$.next(false)  
  }
  this.isLoggedIn$.next(false)  
  }

  forgotPassword(data:IForgetPasswordData):Observable<IForgetPasswordResponse> {
    return this._httpClient.post<IForgetPasswordResponse>(`${environment.apiUrl}auth/forgotPasswords`,data)
  }
  
  verifyResetCode(data:IResetCodeData):Observable<IResetCodeResponse> {
    return this._httpClient.post<IResetCodeResponse>(`${environment.apiUrl}auth/verifyResetCode`,data)
  }
  
  resetPassword(data:IResetPasswordData):Observable<IResetPasswordResponse> {
    return this._httpClient.put<IResetPasswordResponse>(`${environment.apiUrl}auth/resetPassword`,data)
  }
}
