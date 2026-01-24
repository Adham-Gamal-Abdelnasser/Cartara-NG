import { Component } from '@angular/core';
import { NavbarComponent } from "../../../../shared/components/navbar/navbar.component";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-userlayout',
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './userlayout.component.html',
  styleUrl: './userlayout.component.css',
})
export class UserlayoutComponent {

}
