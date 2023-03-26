import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/UI/modal/modal.component';
import { BasketPageComponent } from './pages/basket-page/basket-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ContainerComponent } from './components/UI/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    MainPageComponent,
    ProductsPageComponent,
    ProductDetailsPageComponent,
    BasketPageComponent,
    ContainerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
