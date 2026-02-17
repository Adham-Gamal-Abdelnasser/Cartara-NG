import { Component, inject, signal, WritableSignal } from '@angular/core';
import { BrandsService } from '../../../../../core/services/brands/brands.service';
import { IBrand } from '../../../../../shared/models/brand/ibrand.interface';
import { IPrimeOption } from '../../../../../shared/models/primeoption/iprimeoption.interface';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-sliderbrands',
  imports: [CarouselModule],
  templateUrl: './sliderbrands.component.html',
  styleUrl: './sliderbrands.component.css',
})
export class SliderbrandsComponent {
  private readonly _brandsSerice = inject(BrandsService)
  brands:WritableSignal<IBrand[]> = signal<IBrand[]>([])
  responsiveOptions: IPrimeOption[]=[]
  recieveAllBrands():void {
    this._brandsSerice.getAllBrands().subscribe(res=>{
      this.brands.set(res.data)
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

  ngOnInit():void {
    this.initiateResponsiveOptions()
    this.recieveAllBrands()
  }
}
