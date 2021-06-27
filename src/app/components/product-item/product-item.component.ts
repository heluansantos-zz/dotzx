import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/product';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserActions } from '../../store/user';
import { IApplicationState } from 'src/app/store/application-state';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Iproduct | undefined;
  public id: string = '';

  protected subscriptions: Subscription[] = [];

  constructor(
    protected appService: AppService,
    protected store: Store<IApplicationState>,
    private activatedRoute: ActivatedRoute,
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') ?? '';
  }

  ngOnInit(): void {
  }

  addToCart(): void {
    if (this.product === undefined) {
      return;
    }

    this.store.dispatch(UserActions.setCartData({ cartData: this.product }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription): void => {
      subscription.unsubscribe();
    });
  }

}
