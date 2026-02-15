import { Component, inject, signal, WritableSignal } from '@angular/core';
import { WishitemComponent } from "./components/wishitem/wishitem.component";
import { WishlistService } from '../../../core/services/wishlist/wishlist.service';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from '../../../shared/models/product/iproduct.interface';

@Component({
  selector: 'app-wishlist',
  imports: [WishitemComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
})
export class WishlistComponent {
  private readonly _wishlistService = inject(WishlistService)
  private readonly _toastrService = inject(ToastrService)
  wishProducts: WritableSignal<IProduct[]> = signal<IProduct[]>([])

  recieveWishProducts():void {
    this._wishlistService.getLoggedUserWishlist().subscribe(res=>{
      console.log(res);
      this.wishProducts.set(res.data)
    },err=>{
      console.log(err)
      this._toastrService.error(err.error.message);
    })
  }

  deleteWishProduct(id:string):void {
    this._wishlistService.removeProductFromWishlist(id).subscribe(res=>{
      this.wishProducts.set(res.data)
      this._toastrService.info(res.message)
    },err=>{
      this._toastrService.error(err.error.message)
    })
  }

  ngOnInit():void {
    this.recieveWishProducts();
  }
}
