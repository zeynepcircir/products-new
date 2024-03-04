import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { log } from 'console';
import { PrimeNGConfig } from 'primeng/api';
import { ProductModel } from 'src/app/models/ProductModel';
import { Location } from '@angular/common';
import { ProductService } from 'src/app/services/product.service';
import { ProductEditComponent } from 'src/app/product-card/product-edit/product-edit.component';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  productName: string = '';
  product: ProductModel | null = null;
  productList: ProductModel[] = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productService: ProductService,
    private location: Location,
    private dialogService: DialogService
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

 
  goBack() {
    this.location.back();
  }

  show(product: ProductModel) {
    console.log(product);
    this.dialogService
      .open(ProductEditComponent, {
        header: 'Choose a Product',
        width: '70%',
        contentStyle: { 'max-height': '500px', overflow: 'auto' },
        baseZIndex: 10000,
        data: product,
      })
      .onClose.subscribe((response: ProductModel) => {
        if (response) {
          this.product = response;
        }
      });
  }
}
