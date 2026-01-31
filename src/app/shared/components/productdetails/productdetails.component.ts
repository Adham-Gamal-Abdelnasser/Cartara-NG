import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HeartIcon, LucideIconData, LucideAngularModule, ShoppingCartIcon, StarIcon } from 'lucide-angular';
import { LetterComponent } from "../letter/letter.component";

@Component({
  selector: 'app-productdetails',
  imports: [LucideAngularModule, LetterComponent],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css',
})
export class ProductdetailsComponent {
  readonly heart:LucideIconData= HeartIcon
  readonly shoppingCart:LucideIconData = ShoppingCartIcon
  readonly star:LucideIconData = StarIcon 
  @ViewChild('mainImage') mainImage!:ElementRef
  switchMainImage(e:PointerEvent){
    const img = e.target as HTMLImageElement;
    this.mainImage.nativeElement.src = img.src;
  }
}