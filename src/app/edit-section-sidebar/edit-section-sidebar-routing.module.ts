import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { EditSectionSidebarComponent } from './edit-section-sidebar.component';


const routes: Routes = [
  {
    path: 'home',
    component: SidebarComponent,
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
