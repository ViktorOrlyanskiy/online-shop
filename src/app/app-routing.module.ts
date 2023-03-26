import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketPageComponent } from './pages/basket-page/basket-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: 'products/:id', component: ProductDetailsPageComponent },
  { path: 'basket', component: BasketPageComponent },

  { path: '**', redirectTo: '', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
