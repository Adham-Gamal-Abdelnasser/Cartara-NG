import { Component, inject, Input } from '@angular/core';
import { INavigationLink } from '../../models/navigation/inavigationlink.interface';
import { GateComponent } from "../gate/gate.component";
import { LucideAngularModule, LucideIconData, ShoppingCartIcon } from "lucide-angular";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-authgates',
  imports: [GateComponent, LucideAngularModule, RouterLink, RouterLinkActive],
  templateUrl: './authgates.component.html',
  styleUrl: './authgates.component.css',
})
export class AuthgatesComponent {
  //todo reviece screenClasses from navbar component to apply to the ul element
  @Input() screenClasses!:string
  //todo recieve isLogged from navbar component that have "isUser" whether true from  userLayout or false from guestLayout
  @Input({required: true}) isLogged!:boolean
  private readonly _authService = inject(AuthService)

  readonly cart:LucideIconData = ShoppingCartIcon 
  gates: Array<INavigationLink> =[
    {name: "Log in", path: "/login", id: 0},
    {name: "Sign up", path: "/signup", id: 1},
  ]
  userLogOut ():void {
    this._authService.logOut()
  }
}
