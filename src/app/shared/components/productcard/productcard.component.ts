import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { IProduct } from '../../models/product/iproduct.interface';
import { LucideAngularModule, LucideIconData, StarIcon } from 'lucide-angular';
@Component({
  selector: 'app-productcard',
  imports: [ButtonModule, CardModule,LucideAngularModule],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.css',
})
export class ProductcardComponent {
  @Input() product!:IProduct
  star:LucideIconData = StarIcon
}
