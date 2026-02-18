import { ActivatedRoute, Router } from '@angular/router';
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
  currentSort = signal<'price' | '-price'>('price')
  private readonly _categoriesService = inject(CategoriesService) 
  private readonly _brandsService = inject(BrandsService)
  private readonly _productsService = inject(ProductsService)
  private readonly _activatedRoute = inject(ActivatedRoute)
  private readonly _router = inject(Router)

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

  setURLParams():void {
    this._activatedRoute.queryParams.subscribe(params=> {
      const catID = params["categoryId"] || undefined
      const sort = params["sort"] || "price"
      this.categoryID.set(catID)
      this.currentSort.set(sort)
      this.recieveProducts(catID,undefined,sort)
    })
  }

  changeURL(params:any):void {
    this._router.navigate([] , {
      relativeTo: this._activatedRoute,
      queryParams: params,
      queryParamsHandling: "merge",
    })
  }

  sortProducts(event: Event):void {
    const sortingOption = (event.target as HTMLSelectElement).value
    this.changeURL({sort: sortingOption})
  }

  filterByCategory(catID?:string):void {
    this.changeURL({categoryId: catID})
  }

  ngOnInit():void {
    this.setURLParams()
    this.recieveBrands()
    this.recieveCategories()
    this.recieveProducts()
  }
}
