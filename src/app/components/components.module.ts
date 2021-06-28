import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductCardComponent } from './../components/product-card/product-card.component';
import { HeaderComponent } from './../components/header/header.component';
import { CartComponent } from './../components/cart/cart.component';

@NgModule({
  declarations: [ProductCardComponent, HeaderComponent, CartComponent],
  exports: [ProductCardComponent, HeaderComponent, CartComponent],
  imports: [CommonModule, RouterModule],
})
export class ComponentsModule {}
