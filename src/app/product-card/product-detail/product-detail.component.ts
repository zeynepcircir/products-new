import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { log } from 'console';
import { PrimeNGConfig } from 'primeng/api';
import { ProductModel } from 'src/app/models/ProductModel';
import { Location } from '@angular/common';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  productName: string = '';
  product: ProductModel | null = null;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productService: ProductService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      this.productName = params.get('productName') ?? '';
    });

    this.getProductByProductTitle();
  }

  getProductByProductTitle() {
    this._productService.getProducts().subscribe((response) => {
      //@ts-ignore
      this.product = response.find((resp) => resp.title === this.productName);
    });
  }

  goBack(){ 
    this.location.back();
  }
}
