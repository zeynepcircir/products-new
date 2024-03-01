import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductCardComponent } from '../product-card/product-card/product-card.component';


const routes: Routes = [
  {
       path: 'product-table', 
       component: ProductTableComponent ,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductTableRoutingModule { }
