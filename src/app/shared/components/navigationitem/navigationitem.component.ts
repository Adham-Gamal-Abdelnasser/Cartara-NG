import { Component, Input } from '@angular/core';
import { INavigationLink } from '../../models/navigation/inavigationlink';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navigationitem',
  imports: [RouterLink],
  templateUrl: './navigationitem.component.html',
  styleUrl: './navigationitem.component.css',
})
export class NavigationitemComponent {
  @Input() navigation!: INavigationLink;
}
