import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-authgates',
  imports: [RouterLink],
  templateUrl: './authgates.component.html',
  styleUrl: './authgates.component.css',
})
export class AuthgatesComponent {
  //todo reviece screenClasses from navbar component to apply to the ul element
  @Input() screenClasses!:string
  //todo recieve isLogged from navbar component that have "isUser" whether true from  userLayout or false from guestLayout
  @Input({required: true}) isLogged!:boolean
}
