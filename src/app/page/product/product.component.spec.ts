import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ProductComponent } from './product.component';
import { AppService } from '../../app.service';
import {
  IApplicationState,
  initialValue,
} from '../../store/application-state';
import { UserActions } from '../../store/user';
import { IProduct } from '../../interfaces/product';

describe('ProductComponent', () => {
  let productComponent: ProductComponent;
  let mockStore: MockStore<IApplicationState>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let appServiceSpy: jasmine.SpyObj<AppService>;
  let activatedRouteSpy: jasmine.SpyObj<ActivatedRoute>;

  const initialState: IApplicationState = initialValue;
  const mockedProduct: IProduct = {
    id: '',
    createdAt: '',
    price: 0,
    image: '',
    name: '',
    description: '',
  };

  beforeEach((): void => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', {
      get: () => of({}),
    });

    appServiceSpy = jasmine.createSpyObj('AppService', {
      getProductById: of(mockedProduct),
    });

    activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', ['paramMap'], {
      snapshot: {
        paramMap: {
          get: () => '',
        },
      },
    });

    TestBed.configureTestingModule({
      providers: [
        ProductComponent,
        provideMockStore({ initialState }),
        { provide: HttpClient, useValue: httpClientSpy },
        { provide: AppService, useValue: appServiceSpy },
        { provide: ActivatedRoute, useValue: activatedRouteSpy },
      ],
    });

    productComponent = TestBed.inject(ProductComponent);
    mockStore = TestBed.inject(MockStore);

    spyOn(mockStore, 'dispatch').and.callFake((): void => {});
  });

  it('should initialize ProductComponent', (): void => {
    expect(productComponent).toBeDefined();
    expect(mockStore).toBeDefined();
  });

  it('should product have data after trigger getProduct', (): void => {
    productComponent.getProduct();

    expect(productComponent.product).toEqual(mockedProduct);
  });

  it('should store to have been caled dispatch after trigger addToCart', (): void => {
    productComponent.addToCart();
    productComponent.product = mockedProduct;

    expect(mockStore.dispatch).toHaveBeenCalledWith(
      UserActions.setCartData({ cartData: mockedProduct }),
    );
  });

  it('should return empty if product is undefined', (): void => {
    productComponent.product = undefined;

    expect(productComponent.addToCart()).toBeUndefined();
  });
});
