import { Component, inject, input, InputSignal, signal, WritableSignal } from '@angular/core';
import { HeartIcon, LoaderCircleIcon, LucideAngularModule } from "lucide-angular";
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../../../core/services/wishlist/wishlist.service';
import { BehaviorSubject, finalize } from 'rxjs';

@Component({
  selector: 'app-addtowishlistbutton',
  imports: [LucideAngularModule],
  templateUrl: './addtowishlistbutton.component.html',
  styleUrl: './addtowishlistbutton.component.css',
})
export class AddtowishlistbuttonComponent {
  readonly heart= HeartIcon
  readonly loader = LoaderCircleIcon
  prdID:InputSignal<string>=input.required<string>()
  private readonly _toastrService = inject(ToastrService)
  private readonly _wishlistService = inject(WishlistService)
  isLoading:WritableSignal<boolean> = signal<boolean>(false)

  sendProductToWishlist():void {
    this.isLoading.set(true)
    this._wishlistService.addProductToWishlist(this.prdID()).pipe(finalize(()=>{this.isLoading.set(false)})).subscribe(res=>{
      this._wishlistService.wishlistCount.set(this._wishlistService.wishlistCount() + 1)
      this._toastrService.info(res.message)
    })
  }

}
