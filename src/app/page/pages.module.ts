import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    ProductComponent,
    ProductsComponent,
  ],
  imports: [CommonModule, ComponentsModule, RouterModule, HttpClientModule],
})
export class PagesModule {}
