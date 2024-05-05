import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in/sign-in.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'AngularFundamentals' },
  {
    path: 'catalog',
    component: CatalogComponent,
    title: 'catalog -joes robot shop',
  },
  { path: 'cart', component: CartComponent, title: 'cart -joes robot shop' },
  {
    path: 'sign-in',
    component: SignInComponent,
    title: 'sign-in -joes robot shop',
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
