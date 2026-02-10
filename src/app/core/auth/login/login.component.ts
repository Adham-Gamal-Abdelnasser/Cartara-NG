import { Component, inject, signal, WritableSignal } from '@angular/core';
import { IField } from '../../../shared/models/field/ifield.interface';
import { FieldComponent } from '../../../shared/components/field/field.component';
import { LetterComponent } from '../../../shared/components/letter/letter.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrormessageComponent } from "../../../shared/components/errormessage/errormessage.component";
import { BehaviorSubject, finalize, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { LucideAngularModule, ShellIcon } from 'lucide-angular';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { LogInData } from '../../../shared/models/login/ilogin.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [LetterComponent, ReactiveFormsModule, ErrormessageComponent, AsyncPipe, LucideAngularModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent { 
  // todo ________________________________________________icon
  readonly loader = ShellIcon
  // todo ________________________________________________props
  isLoading = new BehaviorSubject<boolean>(false);
  authSubscription!: Subscription
  logInForm!: FormGroup;
  errorMsg:WritableSignal<string> = signal<string>('')
  // todo ________________________________________________services
  private readonly _formBuilder= inject(FormBuilder)
  private readonly _authService = inject(AuthService)
  private readonly _router= inject(Router)
  private readonly _toastrService = inject(ToastrService)
  // todo ________________________________________________set form values
  initiateForm():void{
    this.logInForm = this._formBuilder.group({
      email: new FormControl("",[Validators.required,Validators.email,]),
      password: new FormControl("",[Validators.required,Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{5,}")]),
    })
  }
  ngOnInit():void {
    this.initiateForm();
  } 
  // logInFields: IField[] = [
  //   { id: 1, label: 'email', type: 'text' , control: this.logInForm.get('email') as FormControl , touched: this.logInForm.get('name')?.touched as boolean},
  //   { id: 2, label: 'password', type: 'password' , control: this.logInForm.get('email') as FormControl , touched: this.logInForm.get('name')?.touched as boolean}
  // ];
  logIn():void {
    // todo unsubscribe in case of any remaining subscriptions
    this.authSubscription?.unsubscribe()
    // todo reset error message in case of previous error message exist 
    this.errorMsg.set("")
    if(this.logInForm.valid){
        const data: Partial<LogInData> = this.logInForm.value
        this.isLoading.next(true)
        this.authSubscription= this._authService.logIn(data).pipe(finalize(()=>{this.isLoading.next(false)})).subscribe(res => {
          this._router.navigate(["/home"])
          this._toastrService.info(res.message , 'Success' ,{
            progressBar: true,
          })
        },err=>{
          this._toastrService.error(err.error.message, 'Error' , {
            progressBar: true,
          })
        })
      }else {
        this.logInForm.markAllAsTouched()
      }
    }  
  }