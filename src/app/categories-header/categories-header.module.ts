import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesHeaderRoutingModule } from './categories-header-routing.module';
import { CategoriesHeaderComponent } from './categories-header.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriesHeaderRoutingModule
  ],
  declarations: [CategoriesHeaderComponent]
})
export class CategoriesHeaderModule { }
