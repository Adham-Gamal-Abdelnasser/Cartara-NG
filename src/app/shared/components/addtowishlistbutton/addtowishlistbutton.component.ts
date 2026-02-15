import { Component, inject, input, InputSignal, signal } from '@angular/core';
import { HeartIcon, LucideAngularModule } from "lucide-angular";
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../../../core/services/wishlist/wishlist.service';

@Component({
  selector: 'app-addtowishlistbutton',
  imports: [LucideAngularModule],
  templateUrl: './addtowishlistbutton.component.html',
  styleUrl: './addtowishlistbutton.component.css',
})
export class AddtowishlistbuttonComponent {
  readonly heart= HeartIcon
  prdID:InputSignal<string>=input.required<string>()
  private readonly _toastrService = inject(ToastrService)
  private readonly _wishlistService = inject(WishlistService)

  sendProductToWishlist():void {
    this._wishlistService.addProductToWishlist(this.prdID()).subscribe(res=>{
      this._toastrService.info(res.message)
    },err=>{
      this._toastrService.error(err.error.message)
    })
  }

}
