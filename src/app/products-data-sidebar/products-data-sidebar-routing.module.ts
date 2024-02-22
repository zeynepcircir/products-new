import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicLayoutComponent } from '../layout/public-layout/public-layout.component';
import { ProductsDataSidebarComponent } from './products-data-sidebar.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PublicLayoutComponent,
    children: [
      { path: '', component: ProductsDataSidebarComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsDataSidebarRoutingModule { }
