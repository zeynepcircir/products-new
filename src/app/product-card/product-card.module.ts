import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipModule } from 'primeng/chip';
import { ProductCardRoutingModule } from './product-card-routing.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductDetailComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    ProductCardRoutingModule,
    ButtonModule,
    CardModule,
    AccordionModule,
    ChipModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DialogService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductCardModule {}