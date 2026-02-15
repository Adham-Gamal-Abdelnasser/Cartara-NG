import { Component } from '@angular/core';
import { Trash2Icon, LucideAngularModule } from 'lucide-angular';
import { AddtocartbuttonComponent } from "../../../shared/components/addtocartbutton/addtocartbutton.component";

@Component({
  selector: 'app-wishlist',
  imports: [LucideAngularModule, AddtocartbuttonComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
})
export class WishlistComponent {
  readonly trash = Trash2Icon

}
