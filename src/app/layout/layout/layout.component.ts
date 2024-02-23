import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/models/ProductModel';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(private _router: Router) {}

  productList: ProductModel[] = [];

  ngOnInit(): void {}

  openProductCardComponent() {
    this._router.navigate(['/product-card']);
  }
  openProductTableComponent() {
    this._router.navigate(['/product-table']);
  }

  getProdcuts(event: ProductModel[]) {
    console.log('test', event);
  }
}
