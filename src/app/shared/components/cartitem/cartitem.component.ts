import { Component, inject, input, InputSignal, output } from '@angular/core';
import { LucideAngularModule, Trash2Icon } from 'lucide-angular';
import { Product } from '../../models/cartresult/icartresult.interface';
import { CartService } from '../../../core/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cartitem',
  imports: [LucideAngularModule],
  templateUrl: './cartitem.component.html',
  styleUrl: './cartitem.component.css',
})
export class CartitemComponent {
  readonly trash = Trash2Icon
  productCartItem:InputSignal<Product> = input.required<Product>({})
  deletedPrd= output<null>()
  private readonly _cartService = inject(CartService)
  private readonly _toastrService = inject(ToastrService)
  emitProductDeletion():void {
    this.deletedPrd.emit(null)
  }
}
