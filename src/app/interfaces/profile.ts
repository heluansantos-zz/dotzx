import { IAddress } from './address';

export interface IProfile {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
  address: IAddress;
  points: number;
  orders: any;
}
