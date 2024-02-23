import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductEditRoutingModule } from './product-edit-routing.module';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  declarations: [ProductEditComponent],
  imports: [
    CommonModule,
    ProductEditRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ProductEditModule {}
