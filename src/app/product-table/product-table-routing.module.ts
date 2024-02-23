import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout/layout.component';
import { ProductTableComponent } from './product-table/product-table.component';


  const routes: Routes = [
  {
    path: 'product-table',
    component: LayoutComponent,
    children: [
      { path: '', component: ProductTableComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductTableRoutingModule { }
