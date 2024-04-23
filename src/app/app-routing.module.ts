import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'home -joes robot shop' },
  {
    path: 'catalog',
    component: CatalogComponent,
    title: 'catalog -joes robot shop',
  },
  { path: 'cart', component: CartComponent, title: 'cart -joes robot shop' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
