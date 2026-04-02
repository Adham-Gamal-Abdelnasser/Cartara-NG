import { Component, inject, input, InputSignal, signal, WritableSignal } from '@angular/core';
import { LoaderCircleIcon, LucideAngularModule, LucideIconData, ShoppingCartIcon } from 'lucide-angular';
import { CartService } from '../../../core/services/cart/cart.service';
import { finalize } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addtocartbutton',
  imports: [LucideAngularModule],
  templateUrl: './addtocartbutton.component.html',
  styleUrl: './addtocartbutton.component.css',
})
export class AddtocartbuttonComponent {
  readonly shoppingCart:LucideIconData = ShoppingCartIcon
  readonly loader = LoaderCircleIcon
  prdID:InputSignal<string>=input.required<string>()
  isLoading:WritableSignal<boolean> = signal(false)
  private readonly _cartService = inject(CartService)
  private readonly _toastrService = inject(ToastrService)

  sendproductToCart(){
    this.isLoading.set(true)
    this._cartService.addProducttoCart(this.prdID()).pipe(finalize(()=>{this.isLoading.set(false)})).subscribe(res=>{
      this._cartService.cartCount.set(res.numOfCartItems)
      this._toastrService.info(res.message)
    })
    
  }
}
