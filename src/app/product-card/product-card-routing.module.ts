import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { LayoutComponent } from '../layout/layout/layout.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'product-card/:categoryName', component: ProductCardComponent },
      {
        path: 'product-detail/:productName',
        component: ProductDetailComponent,
      }
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductCardRoutingModule {}