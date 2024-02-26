import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ProductModel } from 'src/app/models/ProductModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  products: any;

  productList: ProductModel[] = [];

  categoryList: string[] = [];
  selectedCategory: string = '';
  onClose: any;
  isTableSelected: boolean = false;
  event: any;
  router: any;

  constructor(
    private primengConfig: PrimeNGConfig,
    private _productService: ProductService,
    private _route: Router
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this._productService.getProducts().subscribe((response) => {
      this.productList = response;

      this.productList?.forEach((pr) => {
        if (!this.categoryList.includes(pr?.category + '')) {
          this.categoryList.push(pr?.category + '');
        }
      });
    });
  }

  ngAfterContentChecked() {
    if (this._productService.data.value) {
      this.productList = this._productService.data.value;
    } else {
      this._productService.getProducts().subscribe((response) => {
        this.productList = response;

        this.productList?.forEach((pr) => {
          if (!this.categoryList.includes(pr?.category + '')) {
            this.categoryList.push(pr?.category + '');
          }
        });
      });
    }
  }

  route2productDetailComponent(product: ProductModel) {
    this._route.navigate([
      '/product-detail/' + product.title,
    ]);
  }
}
