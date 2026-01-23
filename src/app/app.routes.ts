import { Routes } from '@angular/router';
import { UserlayoutComponent } from './core/layouts/components/userlayout/userlayout.component';
import { GuestlayoutComponent } from './core/layouts/components/guestlayout/guestlayout.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { HomeComponent } from './shared/components/home/home.component';
import { CategoriesComponent } from './shared/components/categories/categories.component';
import { BrandsComponent } from './shared/components/brands/brands.component';
import { LoginComponent } from './core/auth/login/login.component';
import { SignupComponent } from './core/auth/signup/signup.component';
import { CartComponent } from './shared/components/cart/cart.component';

export const routes: Routes = [
    {path: "", redirectTo: "login", pathMatch: "full"},
    {path: "", component: GuestlayoutComponent,children: [
        {path: "login", component: LoginComponent},
        {path: "signup", component: SignupComponent},
    ]},
    {path: "", component: UserlayoutComponent,children: [
        {path: "home", component: HomeComponent},
        {path: "categories", component: CategoriesComponent},
        {path: "brands", component: BrandsComponent},
        {path: "shopping-cart", component: CartComponent},
    ]},
    {path: "**", component: NotfoundComponent},
];
 