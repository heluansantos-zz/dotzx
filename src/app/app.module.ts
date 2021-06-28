import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductsCatComponent } from './screens/products-cat/products-cat.component';
import { StoreModule } from '@ngrx/store';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { metaReducer } from './store/state';
import {
  IApplicationState,
  initialValue,
  reducers,
} from './store/application-state';
import { ProductComponent } from './screens/product/product.component';
import { ProfileComponent } from './screens/profile/profile.component';

export function initialState(): IApplicationState {
  return Object.assign({}, initialValue);
}

export const metaReducers = [metaReducer];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductItemComponent,
    ProductsCatComponent,
    ShoppingCartComponent,
    ProductComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatTabsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      initialState,
      metaReducers,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

