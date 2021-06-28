import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import {
  filter,
  debounceTime,
  distinctUntilChanged,
  tap,
} from 'rxjs/operators';

import { AppService } from '../../app.service';
import { IProduct } from '../../interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnDestroy {
  @ViewChild('input', { static: true }) input: ElementRef | undefined;

  public products: IProduct[] = [];

  protected subscriptions: Subscription[] = [];

  constructor(protected appService: AppService) {
    this.getProducts();
  }

  ngAfterViewInit() {
    if (this.input === undefined) {
      return;
    }

    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(400),
        distinctUntilChanged(),
        tap(() => {
          if (this.input === undefined) {
            return;
          }

          this.searchProduct(this.input.nativeElement.value);
        }),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription): void => {
      subscription.unsubscribe();
    });
  }

  getProducts(): void {
    this.subscriptions.push(
      this.appService.getProducts().subscribe((response: any): void => {
        this.products = response;
      }),
    );
  }

  searchProduct(value: string): void {
    this.subscriptions.push(
      this.appService
        .getProductByName(value)
        .subscribe((response: any): void => {
          this.products = response;
        }),
    );
  }
}
