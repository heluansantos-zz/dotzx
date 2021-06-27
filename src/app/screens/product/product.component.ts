import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '../../app.service';
import { IApplicationState } from '../../store/application-state';
import { Iproduct } from '../../interfaces/product';
import { UserActions } from '../../store/user';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnDestroy {
  public product: Iproduct | undefined;
  public id: string = '';

  protected subscriptions: Subscription[] = [];

  constructor(
    protected appService: AppService,
    protected store: Store<IApplicationState>,
    private activatedRoute: ActivatedRoute,
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') ?? '';

    this.getProduct();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription): void => {
      subscription.unsubscribe();
    });
  }

  getProduct(): void {
    this.subscriptions.push(
      this.appService
        .getProductById(this.id)
        .subscribe((response: any): void => {
          this.product = response;
        }),
    );
  }

  addToCart(): void {
    if (this.product === undefined) {
      return;
    }

    this.store.dispatch(UserActions.setCartData({ cartData: this.product }));
  }
}

