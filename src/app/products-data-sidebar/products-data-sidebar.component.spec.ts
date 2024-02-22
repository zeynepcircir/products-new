import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDataSidebarComponent } from './products-data-sidebar.component';

describe('ProductsDataSidebarComponent', () => {
  let component: ProductsDataSidebarComponent;
  let fixture: ComponentFixture<ProductsDataSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsDataSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDataSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
