import { TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
  let productCardComponent: ProductCardComponent;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [ProductCardComponent],
    });

    productCardComponent = TestBed.inject(ProductCardComponent);
  });

  it('should initialize ProductCardComponent', (): void => {
    expect(productCardComponent).toBeDefined();
  });
});
