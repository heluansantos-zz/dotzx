import { Component, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { IApplicationState } from './store/application-state';
import { UserActions, UserSelectors } from './store/user';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  public showCart: boolean = false;

  protected subscriptions: Subscription[] = [];

  constructor(
    protected store: Store<IApplicationState>,
    protected appService: AppService,
  ) {
    this.subscriptions.push(
      this.store
        .pipe(select(UserSelectors.selectCart))
        .subscribe((value: boolean): void => {
          this.showCart = value;
        }),
    );

    this.getUser();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription): void => {
      subscription.unsubscribe();
    });
  }

  getUser(): void {
    this.subscriptions.push(
      this.appService.getUser().subscribe((response: any): void => {
        this.store.dispatch(UserActions.upsertProfile({ profile: response }));
      }),
    );
  }

  setShowCart(): void {
    this.store.dispatch(UserActions.setShowCart({ showCart: !this.showCart }));
  }
}
