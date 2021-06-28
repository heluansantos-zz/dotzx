import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { CartComponent } from './cart.component';
import {
  IApplicationState,
  initialValue,
} from './../../store/application-state';

describe('CartComponent', () => {
  let cartComponent: CartComponent;
  let mockStore: MockStore<IApplicationState>;

  const initialState: IApplicationState = initialValue;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [CartComponent, provideMockStore({ initialState })],
    });

    cartComponent = TestBed.inject(CartComponent);
    mockStore = TestBed.inject(MockStore);

    spyOn(mockStore, 'dispatch').and.callFake((): void => {});
  });

  it('should initialize CartComponent', (): void => {
    expect(cartComponent).toBeDefined();
    expect(mockStore).toBeDefined();
  });

  it('should true if cartData length is equal zero', (): void => {
    cartComponent.cartData = [];

    expect(cartComponent.emptyList()).toBeTrue();
  });

  it('should false if cartData length is different of the zero', (): void => {
    cartComponent.cartData = [
      {
        id: '',
        createdAt: '',
        price: 0,
        image: '',
        name: '',
        description: '',
      },
    ];

    expect(cartComponent.emptyList()).toBeFalse();
  });

  it('should return 0 because cartData is empty array', (): void => {
    expect(cartComponent.getTotal()).toEqual(0);
  });

  it('should return 0 because user is undefined', (): void => {
    cartComponent.user = undefined;

    expect(cartComponent.getBalance()).toEqual(0);
  });

  it('should return 20 because user is defined and have points', (): void => {
    cartComponent.user = {
      id: '1',
      createdAt: '',
      name: 'Teste',
      avatar: '',
      address: { street: '', zip_code: '', number: '' },
      points: 20,
      orders: [],
    };

    expect(cartComponent.getBalance()).toEqual(20);
  });
});
