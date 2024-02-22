import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { EditSectionSidebarModule } from './edit-section-sidebar/edit-section-sidebar.module';
import { ProductsDataSidebarModule } from './products-data-sidebar/products-data-sidebar.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    EditSectionSidebarModule,
    ProductsDataSidebarModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
