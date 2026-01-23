import { Component } from '@angular/core';
import { NavbarComponent } from "../../../../shared/components/navbar/navbar.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-userlayout',
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './userlayout.component.html',
  styleUrl: './userlayout.component.css',
})
export class UserlayoutComponent {

}
