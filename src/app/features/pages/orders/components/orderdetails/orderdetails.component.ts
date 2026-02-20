import { Component, input } from '@angular/core';
import { LetterComponent } from "../../../../../shared/components/letter/letter.component";
import { IOrder } from '../../../../../shared/models/orders/iordersresult.interface';
import { OrderitemcardComponent } from "../orderitemcard/orderitemcard.component";

@Component({
  selector: 'app-orderdetails',
  imports: [LetterComponent, OrderitemcardComponent],
  templateUrl: './orderdetails.component.html',
  styleUrl: './orderdetails.component.css',
})
export class OrderdetailsComponent {
  desiredOrder = input.required<IOrder>()
  
}
