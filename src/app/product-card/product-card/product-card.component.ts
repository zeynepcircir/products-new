import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivationEnd,
  NavigationEnd,
  Router,
} from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ProductModel } from 'src/app/models/ProductModel';
import { ProductService } from 'src/app/services/product.service';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { filter } from 'rxjs';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  providers: [DialogService, MessageService],
})
export class ProductCardComponent implements OnInit {
  viewMode: 'cards' | 'table' = 'cards';
  products: any;
  productList: ProductModel[] = [];
  categoryList: string[] = [];
  selectedCategory: string = '';
  onClose: any;
  categoryName: string = '';

  constructor(
    private primengConfig: PrimeNGConfig,
    private _productService: ProductService,
    private _route: Router,
    private dialogService: DialogService,
    private _activatedRoute: ActivatedRoute
  ) {}

  toggleView(mode: 'cards' | 'table') {
    this.viewMode = mode;
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
        let index = this.productList.findIndex((pr) => pr.id === response.id);

        if (index !== -1) {
          this.productList[index] = response;
        }
      });
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this._activatedRoute.paramMap.subscribe((params) => {
      this.categoryName = params.get('categoryName') ?? '';
      this.getProductByCategory();
    });

    //url'deki değişimleri tespit ediyorum (categoryName parametresini almak için)
    this._route.events
      .pipe(filter((event) => event instanceof ActivationEnd))
      .subscribe((event) => {
        console.log('EVENT: ', event);
        if (!event) {
          this.categoryName = (event as any).snapshot.params.categoryName;
          this.getProductByCategory();
        }
      });
  }

  getProductByCategory() {
    this._productService.getProducts().subscribe((response) => {
      this.productList = response.filter(
        (element) => element.category === this.categoryName
      );
    });
  }

  // ngAfterContentChecked() {
  //   if (this._productService.data.value) {
  //     this.productList = this._productService.data.value;
  //   }
  // }

  route2productDetailComponent(product: ProductModel) {
    this._route.navigate(['/product-detail/' + product.title]);
  }

  deleteProduct(product: ProductModel) {
    this.productList = this.productList.filter((pr: ProductModel) => {
      return pr.id !== product.id;
    });
  }
}
