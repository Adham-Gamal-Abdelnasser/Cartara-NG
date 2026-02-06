import { Component } from '@angular/core';
import { IField } from '../../../shared/models/field/ifield.interface';
import { FieldComponent } from '../../../shared/components/field/field.component';
import { LetterComponent } from '../../../shared/components/letter/letter.component';
import { AbstractControl, AbstractControlOptions, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrormessageComponent } from '../../../shared/components/errormessage/errormessage.component';
@Component({
  selector: 'app-signup',
  imports: [LetterComponent,ReactiveFormsModule,ErrormessageComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  signUpForm = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    email: new FormControl("",[Validators.required,Validators.email,]),
    password: new FormControl("",[Validators.required,Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{5,}")]),
    rePassword: new FormControl("",[Validators.required]),
    phone: new FormControl("",[Validators.required,Validators.pattern("^01[0125][0-9]{8}")]),
  }, { validators: this.confirmPasswords })    
  confirmPasswords (group:AbstractControl) : {mismatch:boolean} | null {
    const pass = group.get('password')?.value
    const rePass = group.get('rePassword')?.value
    if (pass == rePass) {
      return null
    } else {
      return { mismatch: true}
    }
  }
  // signUpFields:IField[] = [
  //   { id: 1, label: 'name', type: 'text',control: this.signUpForm.get('name') as FormControl , touched: this.signUpForm.get('name')?.touched as boolean},
  //   { id: 2, label: 'email', type: 'email',control: this.signUpForm.get('email') as FormControl , touched: this.signUpForm.get('email')?.touched as boolean },
  //   { id: 3, label: 'password', type: 'password',control: this.signUpForm.get('password') as FormControl , touched: this.signUpForm.get('password')?.touched as boolean },
  //   { id: 4, label: 'rePassword', type: 'password',control: this.signUpForm.get('rePassword') as FormControl , touched: this.signUpForm.get('rePassword')?.touched as boolean },
  //   { id: 5, label: 'phone', type: 'tel',control: this.signUpForm.get('phone') as FormControl , touched: this.signUpForm.get('phone')?.touched as boolean },
  // ]
  signUp():void {
    if(this.signUpForm.valid){
      console.log(this.signUpForm.value)

    }else {

    }
  }  
}
