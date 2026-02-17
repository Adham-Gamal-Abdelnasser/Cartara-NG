import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, signal, WritableSignal } from '@angular/core';
import { CategoriesService } from '../../../../../core/services/categories/categories.service';
import { ICategory } from '../../../../../shared/models/category/icategory.interface';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-slidercategories',
  imports: [ButtonModule, CarouselModule, TagModule],
  templateUrl: './slidercategories.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './slidercategories.component.css',

})
export class SlidercategoriesComponent {
  private readonly _categoriesService = inject(CategoriesService)
  categories:WritableSignal<ICategory[]>=signal<ICategory[]>([])

  recieveAllCategories():void {
    this._categoriesService.getAllCategories().subscribe(res=>{
      this.categories.set(res.data)
    })
  }


  // !________________________________________________________________
    products = signal<ICategory[]>([]);
    responsiveOptions: any[] | undefined;

    ngOnInit() {
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
        this.recieveAllCategories()
    }

    




}
