import { Component } from '@angular/core';
import { IField } from '../../../shared/models/field/ifield.interface';
import { FieldComponent } from '../../../shared/components/field/field.component';
import { LetterComponent } from '../../../shared/components/letter/letter.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [LetterComponent, ReactiveFormsModule, FieldComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent { 
  logInForm = new FormGroup({
    email: new FormControl("",[Validators.required,Validators.email,]),
    password: new FormControl("",[Validators.required,Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{5,}")]),
  }) 
  logInFields: IField[] = [
    { id: 1, label: 'email', type: 'text' , control: this.logInForm.get('email') as FormControl , touched: this.logInForm.get('name')?.touched as boolean},
    { id: 2, label: 'password', type: 'password' , control: this.logInForm.get('email') as FormControl , touched: this.logInForm.get('name')?.touched as boolean}
  ];
}
