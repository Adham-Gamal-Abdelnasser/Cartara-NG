import { Routes } from '@angular/router';
import { UserlayoutComponent } from './core/layouts/components/userlayout/userlayout.component';
import { GuestlayoutComponent } from './core/layouts/components/guestlayout/guestlayout.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';

export const routes: Routes = [
    {path: "", redirectTo: "guest", pathMatch: "full"},
    {path: "user", component: UserlayoutComponent},
    {path: "guest", component: GuestlayoutComponent},
    {path: "**", component: NotfoundComponent},
];
 