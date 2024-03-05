import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { LayoutComponent } from '../layout/layout/layout.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HeaderComponent } from '../layout/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'product-card/:categoryName', component: ProductCardComponent },

      {
        path: 'product-detail/:productName',
        component: ProductDetailComponent,
      },

      { path: '', redirectTo: 'product-card/', pathMatch: 'full' },

      { path: '**', redirectTo: 'product-card/' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductCardRoutingModule {}
