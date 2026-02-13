import { Component, Input, input, InputSignal } from '@angular/core';
import { LucideAngularModule, Trash2Icon } from 'lucide-angular';
import { IProduct } from '../../models/product/iproduct.interface';
import { Product } from '../../models/cartresult/icartresult.interface';

@Component({
  selector: 'app-cartitem',
  imports: [LucideAngularModule],
  templateUrl: './cartitem.component.html',
  styleUrl: './cartitem.component.css',
})
export class CartitemComponent {
  readonly trash = Trash2Icon
  productCartItem:InputSignal<Product> = input.required<Product>({})
}
