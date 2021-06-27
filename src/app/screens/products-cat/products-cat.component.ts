import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Iproduct } from 'src/app/interfaces/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-cat',
  templateUrl: './products-cat.component.html',
  styleUrls: ['./products-cat.component.scss']
})
export class ProductsCatComponent implements OnInit {
  public products: Iproduct[] = [];
  protected subscriptions: Subscription[] = [];

  constructor(protected appService: AppService) {
    this.getProducts();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription): void => {
      subscription.unsubscribe();
    });
  }

  ngOnInit(): void {
  }

  getProducts(): void {
    this.subscriptions.push(
      this.appService.getProducts().subscribe((response: any): void => {
        this.products = response;
      }),
    );
  }

}
