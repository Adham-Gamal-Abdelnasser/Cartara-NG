import { Component, effect, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { HeartIcon, LucideIconData, LucideAngularModule, ShoppingCartIcon, StarIcon } from 'lucide-angular';
import { LetterComponent } from "../letter/letter.component";
import { ActivatedRoute } from '@angular/router';
import { ProductDetailsService } from '../../../core/services/product-details/product-details.service';
import { map, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { AddtocartbuttonComponent } from "../addtocartbutton/addtocartbutton.component";
@Component({
  selector: 'app-productdetails',
  imports: [LucideAngularModule, LetterComponent, AddtocartbuttonComponent],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css',
})
export class ProductdetailsComponent {
  //todo define icons
  readonly heart:LucideIconData= HeartIcon
  readonly shoppingCart:LucideIconData = ShoppingCartIcon
  readonly star:LucideIconData = StarIcon 
  // ! ________________________________________________________________________________________________product
  //todo inject services to get product details nd catch product id from url
  private readonly _activatedRoute= inject(ActivatedRoute)
  private readonly _productDetailsService= inject(ProductDetailsService)
  product$ = this._activatedRoute.paramMap.pipe(
    map(params => params.get('id')),
    switchMap(id => this._productDetailsService.getSpecificProduct(id))
  )
  // todo hold product details in signal
  productBox = toSignal(this.product$) 
  // ! ________________________________________________________________________________________________image
  selectedImage = signal<string>('')
  constructor() {
    // todo use effect to listen on any changes occur
    effect(()=>{
      const product = this.productBox()?.data
      if(product && !this.selectedImage()){
        this.selectedImage.set(product.imageCover)
      }
    })
  }
  switchMainProductImage(newSRC:string) :void{
    this.selectedImage.set(newSRC)
  }
}