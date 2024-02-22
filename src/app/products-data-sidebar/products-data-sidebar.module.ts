import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsDataSidebarRoutingModule } from './products-data-sidebar-routing.module';
import { ProductsDataSidebarComponent } from './products-data-sidebar.component';

@NgModule({
  declarations: [ProductsDataSidebarComponent],
  imports: [
    CommonModule,
    ProductsDataSidebarRoutingModule
  ]
})
export class ProductsDataSidebarModule { }
