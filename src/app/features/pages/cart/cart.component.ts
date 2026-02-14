import { Component, WritableSignal, inject, signal } from '@angular/core';
import { LucideAngularModule, Trash2Icon } from 'lucide-angular';
import { CartService } from '../../../core/services/cart/cart.service';
import { CartData } from '../../../shared/models/cartresult/icartresult.interface';
import { CartitemComponent } from "../../../shared/components/cartitem/cartitem.component";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  imports: [LucideAngularModule, CartitemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  readonly trash = Trash2Icon
  userCartDetails: WritableSignal<CartData> = signal<CartData>({} as CartData)
  private readonly _cartService = inject(CartService)
  private readonly _toastrService = inject(ToastrService)
  recieveUserCart():void {
      this._cartService.getLoggedUserCart().subscribe(res=>{
        console.log(res);
        this.userCartDetails.set(res.data)
      },err=>{
        console.log(err);
      })
  }

  deleteProduct(id:string):void {
    this._cartService.removeSpecificCartItem(id).subscribe(res=>{
      this._toastrService.info(res.message)
      this.recieveUserCart()
      console.log(res)
    },err=> {
      console.log(err)
      this._toastrService.error(err.error.message)
    })
  }

  ngOnInit():void {
    this.recieveUserCart()
  }
}
