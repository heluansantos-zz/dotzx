export interface Iprofile {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
  address: IAddress;
  points: number;
  orders: any;
}

export interface IAddress {
  street: string;
  number: string;
  zip_code: string;
}
