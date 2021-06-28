import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { select,Store } from '@ngrx/store';
import { IApplicationState } from 'src/app/store/application-state';
import { UserActions, UserSelectors } from 'src/app/store/user';
import { Iprofile } from 'src/app/interfaces/profile';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user: Iprofile | undefined;
  public showCart: boolean = false;
  protected subscriptions: Subscription[] = [];

  constructor(
    protected store: Store<IApplicationState>,
  ) {
    this.subscriptions.push(
      this.store
        .pipe(select(UserSelectors.selectCart))
        .subscribe((value: boolean): void => {
          this.showCart = value;
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

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription): void => {
      subscription.unsubscribe();
    });
  }

  setShowCart(): void {
    this.store.dispatch(UserActions.setShowCart({ showCart: !this.showCart }));
  }

  ngOnInit(): void {
  }

}
