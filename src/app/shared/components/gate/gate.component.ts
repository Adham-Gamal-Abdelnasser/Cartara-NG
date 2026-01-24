import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { INavigationLink } from '../../models/navigation/inavigationlink.interface';

@Component({
  selector: 'app-gate',
  imports: [RouterLink],
  templateUrl: './gate.component.html',
  styleUrl: './gate.component.css',
})
export class GateComponent {
  @Input() authGate!:INavigationLink

}
