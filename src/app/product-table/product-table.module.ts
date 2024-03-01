
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ProductTableRoutingModule } from './product-table-routing.module';
import { ProductTableComponent } from './product-table/product-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  declarations: [
    ProductTableComponent
  ],
  imports: [
    CommonModule,
    ProductTableRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    CardModule,
    AccordionModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ProductTableModule { }