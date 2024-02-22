import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditSectionSidebarRoutingModule } from './edit-section-sidebar-routing.module';
import { EditSectionSidebarComponent} from './edit-section-sidebar.component';

@NgModule({
  declarations: [EditSectionSidebarComponent],
  imports: [
    CommonModule,
    EditSectionSidebarRoutingModule
  ]
})
export class EditSectionSidebarModule { }
