import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { ProductComponent } from './screens/product/product.component';
import { ProductsCatComponent } from './screens/products-cat/products-cat.component';
import { ProfileComponent } from './screens/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'produtos',
    component: ProductsCatComponent,
  },
  {
    path: 'produto/:id',
    component: ProductComponent,
  },
  {
    path: 'perfil',
    component: ProfileComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
