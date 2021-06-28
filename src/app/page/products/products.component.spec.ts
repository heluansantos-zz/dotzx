import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ProductsComponent } from './products.component';
import { AppService } from '../../app.service';
import { IProduct } from '../../interfaces/product';

describe('ProductsComponent', () => {
  let productsComponent: ProductsComponent;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let appServiceSpy: jasmine.SpyObj<AppService>;

  const mockedProducts: IProduct[] = [
    {
      id: '',
      createdAt: '',
      price: 0,
      image: '',
      name: '',
      description: '',
    },
  ];

  beforeEach((): void => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', {
      get: () => of({}),
    });

    appServiceSpy = jasmine.createSpyObj('AppService', {
      getProducts: of({}),
      getProductByName: of(mockedProducts),
    });

    TestBed.configureTestingModule({
      providers: [
        ProductsComponent,
        { provide: HttpClient, useValue: httpClientSpy },
        { provide: AppService, useValue: appServiceSpy },
      ],
    });

    productsComponent = TestBed.inject(ProductsComponent);
  });

  it('should initialize ProductsComponent', (): void => {
    expect(productsComponent).toBeDefined();
  });

  it('should products have data after trigger searchProduct', (): void => {
    productsComponent.searchProduct('');

    expect(productsComponent.products).toEqual(mockedProducts);
  });
});
