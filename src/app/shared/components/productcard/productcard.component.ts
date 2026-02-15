import { Component, input, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { IProduct } from '../../models/product/iproduct.interface';
import { LucideAngularModule, HeartIcon, StarIcon, LucideIconData } from 'lucide-angular';
import { RouterLink } from "@angular/router";
import { AddtocartbuttonComponent } from "../addtocartbutton/addtocartbutton.component";
import { AddtowishlistbuttonComponent } from "../addtowishlistbutton/addtowishlistbutton.component";
@Component({
  selector: 'app-productcard',
  imports: [ButtonModule, CardModule, LucideAngularModule, RouterLink, AddtocartbuttonComponent, AddtowishlistbuttonComponent],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.css',
})
export class ProductcardComponent {
  product = input.required<IProduct>()
  star:LucideIconData = StarIcon
 
}
