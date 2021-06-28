import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnDestroy,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { IApplicationState } from './../../store/application-state';
import { UserSelectors } from './../../store/user';
import { IProduct } from './../../interfaces/product';
import { IProfile } from './../../interfaces/profile';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnDestroy {
  @Input() show: boolean = false;
  @Output() readonly onClose: EventEmitter<void> = new EventEmitter<void>();
  public cartData: IProduct[] = [];
  public user: IProfile | undefined;

  protected subscriptions: Subscription[] = [];

  constructor(protected store: Store<IApplicationState>) {
    this.subscriptions.push(
      this.store
        .pipe(select(UserSelectors.selectCartData))
        .subscribe((cartData: IProduct[]): void => {
          this.cartData = cartData;
        }),
    );

    this.subscriptions.push(
      this.store
        .pipe(select(UserSelectors.selectUser))
        .subscribe((user: IProfile): void => {
          this.user = user;
        }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription): void => {
      subscription.unsubscribe();
    });
  }

  emptyList(): boolean {
    return this.cartData.length === 0;
  }

  getTotal(): number {
    let total = 0;

    this.cartData.map((product: IProduct): void => {
      total += product.price;
    });

    return total;
  }

  getBalance(): number {
    if (this.user === undefined) {
      return this.getTotal();
    }

    return this.user.points - this.getTotal();
  }

  close(): void {
    this.onClose.emit();
  }
}
