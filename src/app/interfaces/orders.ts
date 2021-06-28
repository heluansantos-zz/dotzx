import { IProduct } from './product';

export interface IOrder {
  status: string;
  product: IProduct;
}
