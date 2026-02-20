import { Component, input, InputSignal, signal } from '@angular/core';
import { IOrder } from '../../../../../shared/models/orders/iordersresult.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-sideorder',
  imports: [DatePipe],
  templateUrl: './sideorder.component.html',
  styleUrl: './sideorder.component.css',
})
export class SideorderComponent {
  navOrder:InputSignal<IOrder>= input.required<IOrder>()
  count:InputSignal<number>= input.required<number>()
}
