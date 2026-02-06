import { Component, Input } from '@angular/core';
import { IField } from '../../models/field/ifield.interface';
import { ErrormessageComponent } from '../errormessage/errormessage.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-field',
  imports: [ReactiveFormsModule,ErrormessageComponent],
  templateUrl: './field.component.html',
  styleUrl: './field.component.css',
})
export class FieldComponent {
  @Input({required: true}) inputField!:IField
  ngOnInit(){
    console.log(this.inputField)
  }
}
