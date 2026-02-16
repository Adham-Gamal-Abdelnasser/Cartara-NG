import { Component, inject, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { WishitemComponent } from "./components/wishitem/wishitem.component";
import { WishlistService } from '../../../core/services/wishlist/wishlist.service';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from '../../../shared/models/product/iproduct.interface';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  imports: [WishitemComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
})
export class WishlistComponent {
  private readonly _wishlistService = inject(WishlistService)
  private readonly _toastrService = inject(ToastrService)
  private readonly _platform_ID = inject(PLATFORM_ID)
  wishProducts: WritableSignal<IProduct[]> = signal<IProduct[]>([])

  recieveWishProducts():void {
    this._wishlistService.getLoggedUserWishlist().subscribe(res=>{
      console.log(res);
      this.wishProducts.set(res.data)
    })
  }

  deleteWishProduct(id:string):void {
    this._wishlistService.removeProductFromWishlist(id).subscribe(res=>{
      this.recieveWishProducts();
      this._wishlistService.wishlistCount.set(this._wishlistService.wishlistCount()-1)
      this._toastrService.info(res.message)
    })
  }

  ngOnInit():void {
    if (isPlatformBrowser(this._platform_ID)) {
      if (localStorage.getItem('userToken') ) { 
        this.recieveWishProducts();
      }
    }
  }
}
