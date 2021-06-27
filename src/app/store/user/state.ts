import { Iproduct } from './../../interfaces/product';
import { Iprofile } from './../../interfaces/profile';

export interface IUserState {
  profile: Iprofile;
  showCart: boolean;
  cartData: Iproduct[];
}

export const userInitialState: IUserState = {
  profile: {
    id: '',
    createdAt: '',
    name: '',
    avatar: '',
    address: { street: '', number: '', zip_code: '' },
    points: 0,
    orders: [],
  },
  showCart: false,
  cartData: [],
};
