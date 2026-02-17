import { Component , signal } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { IPrimeOption } from '../../../../../shared/models/primeoption/iprimeoption.interface';

@Component({
  selector: 'app-hero',
  imports: [CarouselModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',

})
export class HeroComponent {
  sliderImages= signal<{image:string}[]>([{image:'/2.jpg'},{image:'/2.jpg'}])
  responsiveOptions: IPrimeOption[] | undefined;
  
  initiateResponsiveOptions():void {
    this.responsiveOptions = [
            {
                breakpoint: '1400px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
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
  }
}
