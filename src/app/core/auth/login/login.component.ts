import { Component } from '@angular/core';
import { IField } from '../../../shared/models/field/ifield.interface';
import { FieldComponent } from '../../../shared/components/field/field.component';
import { LetterComponent } from '../../../shared/components/letter/letter.component';

@Component({
  selector: 'app-login',
  imports: [FieldComponent,LetterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  inputFields: IField[] = [
    { id: 1, label: 'email', type: 'text' },
    { id: 2, label: 'password', type: 'password' }
  ];
}
