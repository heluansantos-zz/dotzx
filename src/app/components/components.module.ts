import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductItemComponent } from './../components/product-item/product-item.component';
import { HeaderComponent } from './../components/header/header.component';
import { ShoppingCartComponent } from './../components/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [ProductItemComponent, HeaderComponent, ShoppingCartComponent],
  exports: [ProductItemComponent, HeaderComponent, ShoppingCartComponent],
  imports: [CommonModule, RouterModule],
})
export class ComponentsModule {}
