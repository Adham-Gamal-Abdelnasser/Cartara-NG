import { Component, Input } from '@angular/core';
import { INavigationLink } from '../../models/navigation/inavigationlink.interface';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navigationitem',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigationitem.component.html',
  styleUrl: './navigationitem.component.css',
})
export class NavigationitemComponent {
  @Input() navigation!: INavigationLink;
}
