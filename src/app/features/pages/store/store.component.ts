import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ICategory } from '../../../shared/models/category/icategory.interface';
import { IBrand } from '../../../shared/models/brand/ibrand.interface';
import { BrandsService } from '../../../core/services/brands/brands.service';
import { CategoriesService } from '../../../core/services/categories/categories.service';
import { LetterComponent } from "../../../shared/components/letter/letter.component";
import { IProduct } from '../../../shared/models/product/iproduct.interface';
import { ProductsService } from '../../../core/services/products/products.service';
import { ProductcardComponent } from "../../../shared/components/productcard/productcard.component";

@Component({
  selector: 'app-store',
  imports: [LetterComponent, ProductcardComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
})
export class StoreComponent {
  categoryList:WritableSignal<ICategory[]> = signal<ICategory[]>([])
  brandList:WritableSignal<IBrand[]> = signal<IBrand[]>([])
  productList:WritableSignal<IProduct[]> = signal<IProduct[]>([])
  categoryID = signal<string|undefined>(undefined) 
  private readonly _categoriesService = inject(CategoriesService) 
  private readonly _brandsService = inject(BrandsService)
  private readonly _productsService = inject(ProductsService)
  recieveCategories():void {
    this._categoriesService.getAllCategories().subscribe(res=>{
      this.categoryList.set(res.data)
    })
  }

  recieveBrands():void {
    this._brandsService.getAllBrands().subscribe(res=>{
      this.brandList.set(res.data)
    })
  }

  recieveProducts(cateId?:string, page?:number, sort:'price' | '-price' = 'price'):void {
    this._productsService.setGetProducts(cateId, page, sort).subscribe(res=>{
      this.productList.set(res.data)
      if (cateId) {
        this.categoryID.set(cateId)
      }
    })
  }

  specifySortingOption(sorting:'price' | '-price'):void {
    this.recieveProducts(this.categoryID(),undefined,sorting)
  }

  ngOnInit():void {
    this.recieveBrands()
    this.recieveCategories()
    this.recieveProducts()
  }
}
