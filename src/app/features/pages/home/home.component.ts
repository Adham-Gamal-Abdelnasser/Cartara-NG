import { Component } from '@angular/core';
import { ProdsectionComponent } from "./components/prodsection/prodsection.component";
import { HeroComponent } from './components/hero/hero.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ProdsectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
