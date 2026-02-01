import { Component, Input } from '@angular/core';
import { IField } from '../../models/field/ifield.interface';
import { ErrormessageComponent } from '../errormessage/errormessage.component';

@Component({
  selector: 'app-field',
  imports: [ErrormessageComponent],
  templateUrl: './field.component.html',
  styleUrl: './field.component.css',
})
export class FieldComponent {
  @Input({required: true}) inputField!:IField
}
