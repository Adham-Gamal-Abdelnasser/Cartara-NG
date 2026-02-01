import { Component } from '@angular/core';
import { IField } from '../../../shared/models/field/ifield.interface';
import { FieldComponent } from '../../../shared/components/field/field.component';
import { LetterComponent } from '../../../shared/components/letter/letter.component';

@Component({
  selector: 'app-signup',
  imports: [FieldComponent,LetterComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  signUpFields:IField[] = [
    { id: 1, label: 'name', type: 'text' },
    { id: 2, label: 'email', type: 'email' },
    { id: 3, label: 'password', type: 'password' },
    { id: 4, label: 'rePassword', type: 'password' },
    { id: 5, label: 'phone', type: 'tel' },
  ]
}
