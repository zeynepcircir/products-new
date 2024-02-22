import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { ProductsDataSidebarComponent } from './products-data-sidebar.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: SidebarComponent,
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
