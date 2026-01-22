import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-authgates',
  imports: [],
  templateUrl: './authgates.component.html',
  styleUrl: './authgates.component.css',
})
export class AuthgatesComponent {
  @Input() screenClasses!:string
}
