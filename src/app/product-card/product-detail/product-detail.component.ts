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
  providers: [DialogService, MessageService],
})
export class ProductDetailComponent implements OnInit {
  productName: string = '';
  product: ProductModel | null = null;
  productList: ProductModel[] = [];

  constructor(
    private primengConfig: PrimeNGConfig,
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
      this.product = response.find((element) => element.title === this.productName);
    });
  }

  goBack() {
    this.location.back();
  }


  show(product: ProductModel) {
    console.log(product);
    this.dialogService
      .open(ProductEditComponent, {
        header: 'Edit Product',
        width: '70%',
        contentStyle: { 'max-height': '500px', overflow: 'auto' },
        baseZIndex: 10000,
        data: product,
      })
      .onClose.subscribe((updatedProduct: ProductModel) => {
        if (updatedProduct) {
          // Güncellenmiş ürün bilgisini alıp tablodaki ilgili ürünü güncelliyoruz
          let index = this.productList.findIndex(pr => pr.id === updatedProduct.id);
          if (index !== -1) {
            this.productList[index] = updatedProduct;
          }
        }
      });
  }
}