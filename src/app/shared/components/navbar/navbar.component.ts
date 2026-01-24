import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { LucideAngularModule, LucideIconData, MenuIcon, XIcon } from 'lucide-angular';
import { NavigationitemComponent } from "../navigationitem/navigationitem.component";
import { INavigationLink } from '../../models/navigation/inavigationlink.interface';
import { AuthgatesComponent } from "../authgates/authgates.component";

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule, NavigationitemComponent, AuthgatesComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  //todo declare icons
  readonly bars:LucideIconData = MenuIcon
  readonly close:LucideIconData = XIcon
  //todo navbar flag
  isNavOpen: boolean = false;
  //todo catch navbar that is open for toggling
  @ViewChild('togglableNavbar') togglableNavbar!:ElementRef;
  navHeight:number = 0;
  //todo nav links
  navLinks: INavigationLink[] = [
    {name: 'Home', path: '/home', id: 0},
    // {name: 'Cart', path: '/shopping-cart', id: 1},
    {name: 'Categories', path: '/categories', id: 2},
    {name: 'Brands', path: '/brands', id: 3},
  ]  
  //todo toggle navbar by flag and make icons catched toggle
  toggleNav() :void {
    if(this.isNavOpen){
      this.navHeight = 0;
    } else{
      this.navHeight = this.togglableNavbar.nativeElement.scrollHeight;
    }
    this.isNavOpen = !this.isNavOpen;
  }
  //todo close navbar function for nav link click
  closeNav():void {
    this.navHeight = 0;
    this.isNavOpen = false;
  }
  //todo make navbar shrink on scroll
  //todo catch "nav" element
  @ViewChild('theWholeNav') theWholeNav!:ElementRef;
  @HostListener('window:scroll') makeNavbarShrinkOnScroll(): void {
    if(scrollY > 0){
      this.theWholeNav.nativeElement.classList.replace("py-4", "py-2");
    }else {
      this.theWholeNav.nativeElement.classList.replace("py-2", "py-4");
    }
  }
  //todo check if user is guest or user
  @Input({required: true}) isUser!: boolean ;
}
