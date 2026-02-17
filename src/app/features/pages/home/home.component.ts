import { Component } from '@angular/core';
import { ProdsectionComponent } from "./components/prodsection/prodsection.component";
import { HeroComponent } from './components/hero/hero.component';
import { SlidercategoriesComponent } from "./components/slidercategories/slidercategories.component";
import { SliderbrandsComponent } from "./components/sliderbrands/sliderbrands.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ProdsectionComponent, SlidercategoriesComponent, SliderbrandsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
