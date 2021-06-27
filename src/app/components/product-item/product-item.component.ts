import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Iproduct | undefined;

  constructor() {
   }

  ngOnInit(): void {
  }



}
