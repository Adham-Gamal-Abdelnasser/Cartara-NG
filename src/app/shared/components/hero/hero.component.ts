import { Component , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Swiper } from 'swiper/types';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './hero.component.css',

})
export class HeroComponent {
  spaceBetween = 10;

  onProgress(event: CustomEvent<[Swiper, number]>) {
    const [swiper, progress] = event.detail;
    console.log(progress);
  }

  onSlideChange() {
    console.log('slide changed');
  }

}
