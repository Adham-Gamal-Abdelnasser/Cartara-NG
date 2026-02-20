import { Component, input, InputSignal } from '@angular/core';
import { LucideAngularModule, LucideIconData, StarIcon } from "lucide-angular";
import { RouterLink } from "@angular/router";
import { Card } from "primeng/card";
import { CartItem } from '../../../../../shared/models/orders/iordersresult.interface';

@Component({
  selector: 'app-orderitemcard',
  imports: [LucideAngularModule, RouterLink, Card],
  templateUrl: './orderitemcard.component.html',
  styleUrl: './orderitemcard.component.css',
})
export class OrderitemcardComponent {
  star:LucideIconData = StarIcon
  orderItemInformation:InputSignal<CartItem> = input.required<CartItem>()
}
