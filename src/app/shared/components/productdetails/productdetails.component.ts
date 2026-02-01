import { Component, ElementRef, inject, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HeartIcon, LucideIconData, LucideAngularModule, ShoppingCartIcon, StarIcon } from 'lucide-angular';
import { LetterComponent } from "../letter/letter.component";
import { ActivatedRoute } from '@angular/router';
import { ProductDetailsService } from '../../../core/services/product-details/product-details.service';
import { IProduct } from '../../models/product/iproduct.interface';

@Component({
  selector: 'app-productdetails',
  imports: [LucideAngularModule, LetterComponent],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css',
})
export class ProductdetailsComponent {
  //todo define icons
  readonly heart:LucideIconData= HeartIcon
  readonly shoppingCart:LucideIconData = ShoppingCartIcon
  readonly star:LucideIconData = StarIcon 
  //todo catch the main image
  @ViewChild('mainImage') mainImage!:ElementRef
  //todo replace main image with the clicked one
  switchMainImage(e:PointerEvent){
    const img = e.target as HTMLImageElement;
    this.mainImage.nativeElement.src = img.src;
  }
  //todo inject services to get product details nd catch product id from url
  private readonly _activatedRoute= inject(ActivatedRoute)
  private readonly _productDetailsService= inject(ProductDetailsService)
  //todo property to hold product id
  productId:string | null  = null;
  //todo property to hold product details
  product!:IProduct
  catchProductID ():void {
    this._activatedRoute.paramMap.subscribe(res => {
      this.productId = res.get('id');
      this.recieveProductDetails(this.productId);
    })
  }
  recieveProductDetails(id:string|null):void{ 
    this._productDetailsService.getSpecificProduct(id).subscribe(res=>{
      this.product = res.data
    })
  }
  ngOnInit() :void{
    this.catchProductID()
  }

}