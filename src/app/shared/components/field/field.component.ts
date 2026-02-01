import { Component, Input } from '@angular/core';
import { IField } from '../../models/field/ifield.interface';

@Component({
  selector: 'app-field',
  imports: [],
  templateUrl: './field.component.html',
  styleUrl: './field.component.css',
})
export class FieldComponent {
  @Input({required: true}) inputField!:IField
}
