import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-card/product-detail/product-detail.component';
import { ProductCardComponent } from './product-card/product-card/product-card.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./product-card/product-card.module').then(
        (m) => m.ProductCardModule
      ),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
