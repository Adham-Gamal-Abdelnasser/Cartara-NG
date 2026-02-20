import { Component, computed, inject, Input, PLATFORM_ID, Signal } from '@angular/core';
import { INavigationLink } from '../../models/navigation/inavigationlink.interface';
import { GateComponent } from "../gate/gate.component";
import { HeartIcon, ListOrderedIcon, LucideAngularModule, LucideIconData, ShoppingCartIcon } from "lucide-angular";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AuthService } from '../../../core/services/auth/auth.service';
import { CartService } from '../../../core/services/cart/cart.service';
import { isPlatformBrowser } from '@angular/common';
import { WishlistService } from '../../../core/services/wishlist/wishlist.service';

@Component({
  selector: 'app-authgates',
  imports: [GateComponent, LucideAngularModule, RouterLink, RouterLinkActive],
  templateUrl: './authgates.component.html',
  styleUrl: './authgates.component.css',
})
export class AuthgatesComponent {
  readonly list:LucideIconData = ListOrderedIcon
  readonly heart:LucideIconData = HeartIcon
  readonly cart:LucideIconData = ShoppingCartIcon 
  @Input() screenClasses!:string  //todo reviece screenClasses from navbar component to apply to the ul element
  @Input({required: true}) isLogged!:boolean //todo recieve isLogged from navbar component that have "isUser" whether true from  userLayout or false from guestLayout
  private readonly _authService = inject(AuthService)
  private readonly _cartService = inject(CartService)
  private readonly _wishlistService = inject(WishlistService)
  private readonly _platform_ID = inject(PLATFORM_ID)
  cartItemsCount:Signal<number> = computed(()=> this._cartService.cartCount()) 
  wishlistItemsCount:Signal<number> = computed(()=> this._wishlistService.wishlistCount()) 
  gates: Array<INavigationLink> =[
    {name: "Log in", path: "/login", id: 0},
    {name: "Sign up", path: "/signup", id: 1},
  ]
  userLogOut ():void {
    this._authService.logOut()
  }
  ngOnInit():void {
    if (isPlatformBrowser(this._platform_ID)) {
      if (localStorage.getItem('userToken')) { 
        this.recieveCartData()
        this.recieveWishlistData()
      }
    }
  }

  recieveCartData():void {
    this._cartService.getLoggedUserCart().subscribe(res =>{
      this._cartService.cartCount.set(res.numOfCartItems)
    })
  }

  recieveWishlistData():void {
    this._wishlistService.getLoggedUserWishlist().subscribe(res =>{
      this._wishlistService.wishlistCount.set(res.count)
    })
  }
}
