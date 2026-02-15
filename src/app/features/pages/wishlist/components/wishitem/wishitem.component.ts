import { Component, input, InputSignal } from '@angular/core';
import { LucideAngularModule, Trash2Icon } from "lucide-angular";
import { AddtocartbuttonComponent } from "../../../../../shared/components/addtocartbutton/addtocartbutton.component";
import { IProduct } from '../../../../../shared/models/product/iproduct.interface';

@Component({
  selector: 'app-wishitem',
  imports: [LucideAngularModule, AddtocartbuttonComponent],
  templateUrl: './wishitem.component.html',
  styleUrl: './wishitem.component.css',
})
export class WishitemComponent {
  readonly trash = Trash2Icon
  productWishItem:InputSignal<IProduct> = input.required<IProduct>({})
}
