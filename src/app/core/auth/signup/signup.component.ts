import { Component, inject, signal, WritableSignal } from '@angular/core';
import { IField } from '../../../shared/models/field/ifield.interface';
import { FieldComponent } from '../../../shared/components/field/field.component';
import { LetterComponent } from '../../../shared/components/letter/letter.component';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrormessageComponent } from '../../../shared/components/errormessage/errormessage.component';
import { AuthService } from '../../services/auth/auth.service';
import { BehaviorSubject, finalize, Observable, Subscription } from 'rxjs';
import { SignUpData } from '../../../shared/models/signup/isignup.interface';
import { ShellIcon, LucideAngularModule } from 'lucide-angular';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signup',
  imports: [LetterComponent, ReactiveFormsModule, ErrormessageComponent, LucideAngularModule, AsyncPipe],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  // todo ________________________________________________icon
  readonly loader = ShellIcon
  // todo ________________________________________________props
  isLoading = new BehaviorSubject<boolean>(false);
  signUpForm!:FormGroup
  authSubscription!: Subscription
  errorMsg:WritableSignal<string> = signal<string>('')
  // todo ________________________________________________services
  private readonly _authService = inject(AuthService)
  private readonly _router= inject(Router)
  private readonly _formBuilder= inject(FormBuilder)
  private readonly _toastrService = inject(ToastrService)
  // todo ________________________________________________set form values
  initiateForm():void {   
    this.signUpForm = this._formBuilder.group({
      name: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
      email: new FormControl("",[Validators.required,Validators.email,]),
      password: new FormControl("",[Validators.required,Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{5,}")]),
      rePassword: new FormControl("",[Validators.required]),
      phone: new FormControl("",[Validators.required,Validators.pattern("^01[0125][0-9]{8}")]),
    }, { validators: this.confirmPasswords })

  }
  ngOnInit():void {
    this.initiateForm()
  }
  ngOnDestroy() :void{
    this.authSubscription?.unsubscribe()
  }
  // signUpFields:IField[] = [
    //   { id: 1, label: 'name', type: 'text',control: this.signUpForm.get('name') as FormControl , touched: this.signUpForm.get('name')?.touched as boolean},
    //   { id: 2, label: 'email', type: 'email',control: this.signUpForm.get('email') as FormControl , touched: this.signUpForm.get('email')?.touched as boolean },
    //   { id: 3, label: 'password', type: 'password',control: this.signUpForm.get('password') as FormControl , touched: this.signUpForm.get('password')?.touched as boolean },
    //   { id: 4, label: 'rePassword', type: 'password',control: this.signUpForm.get('rePassword') as FormControl , touched: this.signUpForm.get('rePassword')?.touched as boolean },
    //   { id: 5, label: 'phone', type: 'tel',control: this.signUpForm.get('phone') as FormControl , touched: this.signUpForm.get('phone')?.touched as boolean },
    // ]
    confirmPasswords (group:AbstractControl) : {mismatch:boolean} | null {
      const pass = group.get('password')?.value
      const rePass = group.get('rePassword')?.value
      return pass === rePass ? null : { mismatch: true };
    }
  signUp():void {
    // todo unsubscribe in case of any remaining subscriptions
    this.authSubscription?.unsubscribe()
    // todo reset error message in case of previous error message exist 
    this.errorMsg.set("")
    if(this.signUpForm.valid){
      const data: Partial<SignUpData> = this.signUpForm.value
      this.isLoading.next(true)
      this.authSubscription= this._authService.signUp(data).pipe(finalize(()=>{this.isLoading.next(false)})).subscribe(res => {
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
      this.signUpForm.markAllAsTouched()
    }
  }  
}
