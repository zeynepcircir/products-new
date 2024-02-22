import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../layout/header/header.component';
import { CategoriesHeaderComponent } from './categories-header.component';

const routes: Routes = [
  {
    path: 'home',
    component: HeaderComponent,
    children: [
      { path: '', component: CategoriesHeaderComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesHeaderRoutingModule { }
