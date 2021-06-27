import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/product';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Iprofile } from 'src/app/interfaces/profile';
import { UserSelectors } from 'src/app/store/user';
import { IApplicationState } from 'src/app/store/application-state';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  @Input() show: boolean = false;
  @Output() readonly onClose: EventEmitter<void> = new EventEmitter<void>();
  public cartData: Iproduct[] = [];
  public user: Iprofile | undefined;

  protected subscriptions: Subscription[] = [];

  constructor(protected store: Store<IApplicationState>) {
    this.subscriptions.push(
      this.store
        .pipe(select(UserSelectors.selectCartData))
        .subscribe((cartData: Iproduct[]): void => {
          this.cartData = cartData;
        }),
    );

    this.subscriptions.push(
      this.store
        .pipe(select(UserSelectors.selectUser))
        .subscribe((user: Iprofile): void => {
          this.user = user;
        }),
    );
  }


  ngOnInit(): void {
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

    this.cartData.map((product: Iproduct): void => {
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
