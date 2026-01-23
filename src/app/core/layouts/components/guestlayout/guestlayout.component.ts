import { Component } from '@angular/core';
import { NavbarComponent } from "../../../../shared/components/navbar/navbar.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-guestlayout',
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './guestlayout.component.html',
  styleUrl: './guestlayout.component.css',
})
export class GuestlayoutComponent {

}
