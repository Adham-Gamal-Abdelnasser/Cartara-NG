import { Component } from '@angular/core';
import { NavbarComponent } from "../../../../shared/components/navbar/navbar.component";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-guestlayout',
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './guestlayout.component.html',
  styleUrl: './guestlayout.component.css',
})
export class GuestlayoutComponent {

}
