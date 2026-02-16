import { Component, PLATFORM_ID, WritableSignal, inject, signal } from '@angular/core';
import { LucideAngularModule, Trash2Icon } from 'lucide-angular';
import { CartService } from '../../../core/services/cart/cart.service';
import { CartData } from '../../../shared/models/cartresult/icartresult.interface';
import { ToastrService } from 'ngx-toastr';
import { CartitemComponent } from './components/cartitem/cartitem.component';
import { RouterLink } from "@angular/router";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [LucideAngularModule, CartitemComponent, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  readonly trash = Trash2Icon
  userCartDetails: WritableSignal<CartData> = signal<CartData>({} as CartData)
  private readonly _cartService = inject(CartService)
  private readonly _toastrService = inject(ToastrService)
  private readonly _platform_ID = inject(PLATFORM_ID)
  recieveUserCart():void {
      this._cartService.getLoggedUserCart().subscribe(res=>{
        this.userCartDetails.set(res.data)
      })
  }

  deleteProduct(id:string):void {
    this._cartService.removeSpecificCartItem(id).subscribe(res=>{
      this._toastrService.info(res.message)
      this.userCartDetails.set(res.data)
    })
  }

  updateItemCount(id:string, count:number):void{
    this._cartService.updateCartProductQuantity(id,count).subscribe(res=>{
      this.userCartDetails.set(res.data)
    })
  }
  
  clearCart():void {
    this._cartService.clearUserCart().subscribe(res=>{
      this.userCartDetails.set(res.data)
    })
  }

  ngOnInit():void {
    if (localStorage.getItem('userToken') && isPlatformBrowser(this._platform_ID)) {
      this.recieveUserCart()
    }
  }
}
