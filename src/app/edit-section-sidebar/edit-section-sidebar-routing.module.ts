import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditSectionSidebarComponent } from './edit-section-sidebar.component';
import { PublicLayoutComponent } from '../layout/public-layout/public-layout.component';


const routes: Routes = [
  {
    path: 'home',
    component: PublicLayoutComponent,
    children: [
      { path: '', component: EditSectionSidebarComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditSectionSidebarRoutingModule { }
