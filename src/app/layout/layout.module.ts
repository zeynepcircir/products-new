import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent
  ]
})
export class LayoutModule { }