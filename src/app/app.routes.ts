import { Routes } from '@angular/router';
import { UserlayoutComponent } from './core/layouts/components/userlayout/userlayout.component';
import { GuestlayoutComponent } from './core/layouts/components/guestlayout/guestlayout.component';
import { LoginComponent } from './core/auth/login/login.component';
import { HomeComponent } from './features/pages/home/home.component';

export const routes: Routes = [
    {path: "", redirectTo: "login", pathMatch: "full"},
    {path: "", component: GuestlayoutComponent,children: [
        {path: "login", component: LoginComponent},
        {path: "signup", loadComponent:()=> import('./core/auth/signup/signup.component').then(c=>c.SignupComponent)},
    ]},
    {path: "", component: UserlayoutComponent,children: [
        {path: "home", component: HomeComponent},
        {path: "categories", loadComponent:()=> import('./features/pages/categories/categories.component').then(c=>c.CategoriesComponent)},
        {path: "brands", loadComponent:()=> import('./features/pages/brands/brands.component').then(c=>c.BrandsComponent)},
        {path: "cart", loadComponent:()=> import('./features/pages/cart/cart.component').then(c=>c.CartComponent)},
        {path: "product-details", loadComponent:()=> import('./shared/components/productdetails/productdetails.component').then(c=>c.ProductdetailsComponent)},
    ]},
    {path: "**", loadComponent:()=> import('./shared/components/notfound/notfound.component').then(c=>c.NotfoundComponent)},
];
