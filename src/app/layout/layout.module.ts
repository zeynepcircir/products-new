import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';


import { RouterModule } from '@angular/router';
import { PublicLayoutComponent } from './public-layout/public-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
  ],
  declarations: [
    HeaderComponent,
    PublicLayoutComponent
  ]
})
export class LayoutModule { }