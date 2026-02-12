import { Component, inject, input, InputSignal } from '@angular/core';
import { LucideAngularModule, LucideIconData, ShellIcon, ShoppingCartIcon } from 'lucide-angular';
import { CartService } from '../../../core/services/cart/cart.service';
import { BehaviorSubject, finalize } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addtocartbutton',
  imports: [LucideAngularModule,AsyncPipe],
  templateUrl: './addtocartbutton.component.html',
  styleUrl: './addtocartbutton.component.css',
})
export class AddtocartbuttonComponent {
  readonly shoppingCart:LucideIconData = ShoppingCartIcon
  readonly loader = ShellIcon
  prdID:InputSignal<string>=input.required<string>()
  isLoading = new BehaviorSubject<boolean>(false);

  private readonly _cartService = inject(CartService)
  private readonly _toastrService = inject(ToastrService)

  sendproductToCart(){
    this.isLoading.next(true)
    this._cartService.addProducttoCart(this.prdID()).pipe(finalize(()=>{this.isLoading.next(false)})).subscribe(res=>{
      console.log(res)
      this._toastrService.info(res.message)
    
    },err=>{
        this._toastrService.error(err.error.message)
        console.log(err)
      })
    
  }
}
