import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardRoutingModule } from './product-card-routing.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  declarations: [ProductCardComponent],
  imports: [
    CommonModule,
    ProductCardRoutingModule,
    ButtonModule,
    CardModule,
    AccordionModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductCardModule {}
