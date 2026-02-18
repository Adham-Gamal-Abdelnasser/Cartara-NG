import { Component, inject, signal, WritableSignal } from '@angular/core';
import { CategoriesService } from '../../../../../core/services/categories/categories.service';
import { ICategory } from '../../../../../shared/models/category/icategory.interface';
import { CarouselModule } from 'primeng/carousel';

import { IPrimeOption } from '../../../../../shared/models/primeoption/iprimeoption.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slidercategories',
  imports: [CarouselModule],
  templateUrl: './slidercategories.component.html',
  styleUrl: './slidercategories.component.css',

})
export class SlidercategoriesComponent {
  private readonly _categoriesService = inject(CategoriesService)
  private readonly _router = inject(Router)
  categories:WritableSignal<ICategory[]>=signal<ICategory[]>([])
  responsiveOptions: IPrimeOption[]=[];

  recieveAllCategories():void {
    this._categoriesService.getAllCategories().subscribe(res=>{
      this.categories.set(res.data)
    })
  }
  initiateResponsiveOptions():void {
    this.responsiveOptions = [
            {
                breakpoint: '1400px',
                numVisible: 4,
                numScroll: 2
            },
            {
                breakpoint: '1199px',
                numVisible: 3,
                numScroll: 2
            },
            {
                breakpoint: '767px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '575px',
                numVisible: 1,
                numScroll: 1
            }
        ];
  }
  ngOnInit() {
    this.initiateResponsiveOptions()
    this.recieveAllCategories()
  }

  navigateToCategory(catID:string):void {
    this._router.navigate(["store"],{queryParams: {categoryId: catID}})
  }

}
